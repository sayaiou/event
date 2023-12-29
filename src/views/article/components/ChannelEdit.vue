<script setup>
import { ref } from 'vue'
import {
  articleEditChannelsService,
  articleAddChannelsService
} from '@/api/article.js'
const dialogVisible = ref(false)
const formLabelWidth = '100px'
const formRef = ref()
const form = ref({
  cate_name: '',
  cate_alias: ''
})
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名必须是1-10位非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类名必须是1-15位字母或数字',
      trigger: 'blur'
    }
  ]
}
const emit = defineEmits(['success'])
const open = (row) => {
  dialogVisible.value = true
  form.value = { ...row }
}
const onSubmit = async () => {
  await formRef.value.validate()
  const isEdit = form.value.id
  if (isEdit) {
    await articleEditChannelsService(form.value)
    ElMessage.success('编辑成功')
  } else {
    await articleAddChannelsService(form.value)
    ElMessage.success('添加成功')
  }
  dialogVisible.value = false
  emit('success')
}
defineExpose({
  open
})
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="form.id ? '编辑分类' : '添加分类'"
    width="30%"
  >
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      style="padding-right: 30px"
      :label-width="formLabelWidth"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input
          placeholder="请输入分类名称"
          v-model="form.cate_name"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input
          placeholder="请输入分类别名"
          v-model="form.cate_alias"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
