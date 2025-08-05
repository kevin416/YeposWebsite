import LoginForm from './LoginForm';

// 禁用静态生成，使用动态渲染
export const dynamic = 'force-dynamic';

export default function LoginPage() {
  return <LoginForm />;
} 