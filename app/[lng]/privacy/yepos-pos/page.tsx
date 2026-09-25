import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'YeposPOS Privacy Policy | YEPOS',
  description: 'Privacy policy for the YeposPOS iPhone and iPad application.',
};

const updated = '25 September 2026';

function EnglishPolicy() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-950">YeposPOS Privacy Policy</h1>
      <p className="mt-3 text-gray-600">Last updated: {updated}</p>
      <p className="mt-8">YeposPOS is a business application for authorised staff of merchants that use YEPOS services. Staff accounts are provided by the merchant or its administrator; accounts cannot be created inside the app.</p>

      <h2>Information we process</h2>
      <ul>
        <li><strong>Sign-in and account information:</strong> merchant group number, staff account identifier, password during sign-in, authentication token, staff profile, company membership and permissions.</li>
        <li><strong>Business operations:</strong> products, customers, orders, payments, discounts, collections, pre-orders, terminal selection and related merchant records needed to operate the point of sale.</li>
        <li><strong>Cloud drive content:</strong> files and documents that an authorised user chooses to upload, together with file names, folder locations, ownership and sharing settings.</li>
        <li><strong>Device and printer settings:</strong> configured receipt-printer details and operational preferences needed to print receipts and pick slips.</li>
      </ul>

      <h2>Camera and Bluetooth</h2>
      <p>The camera is used for barcode, collection-code and document scanning. Barcode and collection-code images are processed on the device; the decoded value is used to find the relevant product or order. A scanned document is uploaded only when the user chooses to save it to the merchant cloud drive. Bluetooth access is used to discover and connect to compatible receipt printers.</p>

      <h2>How information is used</h2>
      <p>We process this information to authenticate staff, enforce merchant permissions, provide point-of-sale and order workflows, synchronise merchant records, transfer files selected by users, print business documents, prevent misuse, diagnose failures and support the merchant.</p>

      <h2>Storage and service providers</h2>
      <p>Data is transmitted over encrypted connections to YEPOS-operated services and contracted infrastructure providers that host the business API and cloud-file storage. Authentication credentials are protected by the Apple Keychain. The app may keep operational caches and user-selected offline files on the device and in its private App Group container. We do not sell personal information and do not use the app for third-party advertising or cross-app tracking.</p>

      <h2>Retention and control</h2>
      <p>Business records are controlled by the merchant and retained according to its operational, contractual and legal requirements. Local credentials are removed when the user signs out; cached or offline business content may remain until removed in the app, removed by the merchant, or the app is deleted. Staff who need access corrected or removed should contact their merchant administrator first.</p>

      <h2>Contact</h2>
      <p>For privacy questions or requests, contact YEPOS at <a href="mailto:info@yepos.co.uk">info@yepos.co.uk</a> or call <a href="tel:+447550006600">+44 7550 006600</a>.</p>
    </>
  );
}

function ChinesePolicy() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-950">YeposPOS 隐私政策</h1>
      <p className="mt-3 text-gray-600">最后更新：2026 年 9 月 25 日</p>
      <p className="mt-8">YeposPOS 是供使用 YEPOS 服务的商户授权员工使用的业务 App。员工账号由商户或管理员提供，App 内不能注册账号。</p>

      <h2>我们处理的信息</h2>
      <ul>
        <li><strong>登录与账号信息：</strong>商户集团编号、员工账号、登录时输入的密码、登录令牌、员工资料、所属公司和权限。</li>
        <li><strong>经营数据：</strong>为完成收银工作所需的商品、客户、订单、付款、折扣、取货、预订货、终端选择及相关商户记录。</li>
        <li><strong>商户云盘内容：</strong>授权用户主动选择上传的文件与文档，以及文件名、目录、所有者和分享设置。</li>
        <li><strong>设备与打印设置：</strong>打印收据和拣货单所需的小票打印机配置及操作偏好。</li>
      </ul>

      <h2>相机与蓝牙</h2>
      <p>相机用于扫描商品条码、取货码和文档。条码及取货码图像在设备上处理，识别出的编码仅用于查找对应商品或订单。扫描文档只有在用户选择保存到商户云盘时才会上传。蓝牙权限用于发现并连接兼容的小票打印机。</p>

      <h2>信息用途</h2>
      <p>我们使用上述信息来验证员工身份、执行商户权限、提供收银及订单流程、同步商户记录、传输用户选择的文件、打印业务单据、防止滥用、诊断故障并向商户提供支持。</p>

      <h2>存储与服务提供方</h2>
      <p>数据通过加密连接传输至 YEPOS 运营的服务及受合同约束的基础设施提供方，用于承载业务 API 和云文件存储。登录凭据由 Apple Keychain 保护。App 可能在设备及其私有 App Group 容器内保存操作缓存和用户选择的离线文件。我们不会出售个人信息，也不会把本 App 用于第三方广告或跨 App 跟踪。</p>

      <h2>保留与控制</h2>
      <p>业务记录由商户控制，并按照其经营、合同和法律要求保留。退出登录时会移除本地登录凭据；缓存或离线业务内容可能保留到用户在 App 内删除、商户删除，或 App 被卸载。员工如需更正或删除其访问权限，应先联系所属商户管理员。</p>

      <h2>联系我们</h2>
      <p>如有隐私问题或请求，请发送邮件至 <a href="mailto:info@yepos.co.uk">info@yepos.co.uk</a>，或致电 <a href="tel:+447550006600">+44 7550 006600</a> 联系 YEPOS。</p>
    </>
  );
}

export default async function YeposPosPrivacyPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  return (
    <main className="bg-gray-50 py-14">
      <article className="prose prose-blue mx-auto max-w-3xl rounded-2xl bg-white px-6 py-10 shadow-sm sm:px-10">
        {lng === 'zh' ? <ChinesePolicy /> : <EnglishPolicy />}
      </article>
    </main>
  );
}
