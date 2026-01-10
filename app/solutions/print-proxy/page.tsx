import Link from 'next/link';
import PrefillLink from '../../components/PrefillLink';

export const dynamic = 'force-dynamic';

export default function PrintProxyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900">Print Proxy — 稳定可靠的打印中台</h1>
          <p className="mt-4 text-gray-600">针对厨房打印与小票打印的一体化中台，支持本地代理、打印队列、重试与多模式兼容，适配老旧打印机与新型号。</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="font-semibold">主要功能</h3>
              <ul className="list-disc list-inside mt-3 text-gray-700">
                <li>本地代理 + 云端下发</li>
                <li>打印队列与重试机制</li>
                <li>USB / 蓝牙 / 网络 打印支持</li>
                <li>日志与故障重放</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold">适用场景</h3>
              <p className="mt-3 text-gray-700">适合餐饮门店、连锁厨房、外卖聚合场景，尤其是打印机型号繁多、网络不稳定的门店。</p>
                <div className="mt-6">
                <PrefillLink product="print-proxy">
                  <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full">预约上门适配</span>
                </PrefillLink>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">示意图（占位）</h3>
            <div className="mt-4 bg-white rounded-lg p-6 flex items-center justify-center">
              <img src="/placeholders/placeholder-print.svg" alt="placeholder" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
