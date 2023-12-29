<script setup>
import { ref } from 'vue'
import { userUpdatePwdService } from '@/api/user.js'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores'
import router from '@/router'
const formRef = ref()
const userStore = useUserStore()
const pwdForm = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})

const passwordType = 'password' // Set input type to password for password fields

const checkDifferent = (rule, value, callback) => {
  if (value === pwdForm.value.old_pwd) {
    callback(new Error('新密码不能与原密码相同'))
  } else {
    callback()
  }
}

const checkMatch = (rule, value, callback) => {
  if (value !== pwdForm.value.new_pwd) {
    callback(new Error('确认密码与新密码不一致'))
  } else {
    callback()
  }
}
const pwdRules = ref({
  old_pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度需在6-15位之间', trigger: 'blur' }
  ],
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度需在6-15位之间', trigger: 'blur' },
    { validator: checkDifferent, trigger: 'blur' }
  ],
  re_pwd: [
    { required: true, message: '请确认新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度需在6-15位之间', trigger: 'blur' },
    { validator: checkMatch, trigger: 'blur' }
  ]
})

const submitForm = async () => {
  await formRef.value.validate()
  await userUpdatePwdService(pwdForm.value)
  ElMessage.success('修改成功')
  userStore.setToken('')
  userStore.setUser({})
  router.push('/login')
}

const resetForm = () => {
  formRef.value.resetFields()
}
</script>
<template>
  <page-container title="重置密码">
    <template #default>
      <el-form
        :model="pwdForm"
        ref="formRef"
        :rules="pwdRules"
        label-width="80px"
        style="width: 50%"
      >
        <!-- 第一行 -->
        <el-form-item label="原密码" prop="old_pwd">
          <el-input v-model="pwdForm.old_pwd" :type="passwordType"></el-input>
        </el-form-item>

        <!-- 第二行 -->
        <el-form-item label="新密码" prop="new_pwd">
          <el-input v-model="pwdForm.new_pwd" :type="passwordType"></el-input>
        </el-form-item>

        <!-- 第三行 -->
        <el-form-item label="确认密码" prop="re_pwd">
          <el-input v-model="pwdForm.re_pwd" :type="passwordType"></el-input>
        </el-form-item>

        <!-- 第四行 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm()">修改密码</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </template>
  </page-container>
</template>
