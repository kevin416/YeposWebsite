import CaseCard from '../components/CaseCard';
import Header from '../components/Header';

export const dynamic = 'force-dynamic';

export default function CaseStudiesPage() {
  const cases = [
    {
      title: '连锁餐厅 A：出餐效率提升 30%',
      excerpt: '通过整合打印中台与门店 App，解决了漏单与打印失败的问题，平均出餐时间下降 30%。',
      image: '/placeholders/placeholder-case.svg'
    },
    {
      title: '街边小店 B：切换系统 7 天完成',
      excerpt: '从数据迁移到现场培训，7 天内门店完成切换并稳定运营。',
      image: '/placeholders/placeholder-case.svg'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold">客户案例</h1>
          <p className="mt-3 text-gray-600">真实项目与效果展示（占位数据）</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <CaseCard key={i} title={c.title} excerpt={c.excerpt} image={c.image} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
