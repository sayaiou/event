<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateInfoService } from '@/api/user.js'
import { ElMessage } from 'element-plus'
const formRef = ref()
const loading = ref(false)
const {
  user: { email, nickname, id, username },
  getUser
} = useUserStore()
const formData = ref({
  email,
  id,
  nickname,
  username
})

const formRules = ref({
  nickname: [
    { required: true, message: '昵称不能为空', trigger: 'blur' },
    {
      pattern: /^\S{2,10}$/,
      message: '昵称长度为2-10位非空字符',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
      trigger: ['blur', 'change']
    }
  ]
})

const submitForm = async () => {
  const storedTime = localStorage.getItem('lastClickTime')
  const currentTime = Date.now()
  if (!storedTime || (currentTime - storedTime) / 1000 >= 2) {
    loading.value = true
    await formRef.value.validate()
    await userUpdateInfoService(formData.value)
    setTimeout(() => {
      getUser()
    }, 100)
    localStorage.setItem('lastClickTime', currentTime)
    setTimeout(() => {
      loading.value = false
      ElMessage.success('修改成功')
    }, 300)
  } else {
    ElMessage.warning('请勿快速重复点击')
  }
}
</script>
<template>
  <page-container title="基本资料">
    <template #default>
      <el-form
        style="width: 50%"
        :model="formData"
        :rules="formRules"
        ref="formRef"
        label-position="left"
        label-width="120px"
      >
        <el-form-item label="登录名称">
          <el-input v-model="formData.username" disabled />
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="formData.nickname" minlength="2" maxlength="10" />
        </el-form-item>
        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="formData.email" />
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="submitForm"
            >提交修改</el-button
          >
        </el-form-item>
      </el-form>
    </template>
  </page-container>
</template>
