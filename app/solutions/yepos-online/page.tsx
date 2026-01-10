import Link from 'next/link';
import PrefillLink from '../../components/PrefillLink';

export const dynamic = 'force-dynamic';

export default function YeposOnlinePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900">Yepos Online — 线上点餐与聚合</h1>
          <p className="mt-4 text-gray-600">为顾客提供简单直观的点餐体验，支持多渠道接入（微信、小程序、网页），并与门店系统实时同步。</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-semibold">功能一览</h3>
              <ul className="list-disc list-inside mt-3 text-gray-700">
                <li>多渠道点餐聚合</li>
                <li>优惠券与活动规则支持</li>
                <li>多语言与多店切换</li>
                <li>支付与订单状态回调</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6">
              <h3 className="font-semibold">上线方式</h3>
              <p className="mt-3 text-gray-700">提供嵌入式页面、独立域名或小程序方案，并支持与外卖平台对接。</p>
              <div className="mt-6">
                <PrefillLink product="yepos-online">
                  <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full">预约接入咨询</span>
                </PrefillLink>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">页面占位</h3>
            <div className="mt-4 bg-white rounded-lg p-6 flex items-center justify-center">
              <img src="/placeholders/placeholder-print.svg" alt="placeholder" className="w-full max-w-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
