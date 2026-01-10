import Link from 'next/link';
import PrefillLink from '../../components/PrefillLink';

export const dynamic = 'force-dynamic';

export default function YeposManagerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900">YeposManager — 门店点餐与运营 App</h1>
          <p className="mt-4 text-gray-600">门店端原生 App，支持快速点餐、厨房备注、订单分台与打印设置。专为高峰期稳定出单设计。</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold">功能亮点</h3>
              <ul className="list-disc list-inside mt-3 text-gray-700">
                <li>快速点餐与菜品 modifiers</li>
                <li>员工权限与班次管理</li>
                <li>断网缓存与自动同步</li>
                <li>与打印中台无缝集成</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
              <h3 className="font-semibold">上线与培训</h3>
              <p className="mt-3 text-gray-700">提供现场部署、员工培训与 30 天调优期，确保门店平稳切换。</p>
              <div className="mt-6">
                <PrefillLink product="yepos-manager">
                  <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full">申请试用</span>
                </PrefillLink>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">App 界面占位</h3>
            <div className="mt-4 bg-white rounded-lg p-6 flex items-center justify-center">
              <img src="/placeholders/placeholder-app.svg" alt="placeholder" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
