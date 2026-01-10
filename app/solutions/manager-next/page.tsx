import Link from 'next/link';
import PrefillLink from '../../components/PrefillLink';

export const dynamic = 'force-dynamic';

export default function ManagerNextPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900">Manager Next — 管理后台（连锁门店专用）</h1>
          <p className="mt-4 text-gray-600">为连锁门店提供统一后台、权限管理、订单合并与详尽报表，帮助运营决策与门店扩张。</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
              <h3 className="font-semibold">核心能力</h3>
              <ul className="list-disc list-inside mt-3 text-gray-700">
                <li>多店权限与角色分配</li>
                <li>订单合并与来源追踪</li>
                <li>财务报表与导出</li>
                <li>运营看板与 KPI 监控</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold">部署与支持</h3>
              <p className="mt-3 text-gray-700">支持云端部署或私有化部署，提供运维与数据迁移服务。</p>
              <div className="mt-6">
                <PrefillLink product="manager-next">
                  <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full">申请企业演示</span>
                </PrefillLink>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">界面占位</h3>
            <div className="mt-4 bg-white rounded-lg p-6 flex items-center justify-center">
              <img src="/placeholders/placeholder-app.svg" alt="placeholder" className="w-full max-w-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
