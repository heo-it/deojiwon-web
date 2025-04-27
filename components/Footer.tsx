import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-sm text-gray-500">
      <div className="max-w-screen-xl mx-auto px-4 py-10 space-y-4 text-left">
        {/* 회사 정보 */}
        <div className="space-y-1 leading-relaxed">
          <p>(주)더지원네트웍스</p>
          <p>
            경기도 평택시 관동길 84 | 정보통신공사업: 제311061호 | 엔지니어링업:
            제E-06-001813호
          </p>
          <p>대표자명: 최보윤 | 전화: 070-4035-0380 | FAX: 031-691-0482</p>
        </div>

        {/* 로고 + 저작권 */}
        <div className="flex flex-col items-start md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="더지원네트웍스 로고"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-xs text-gray-400 mt-4 md:mt-0">
            Copyright© 2025 DEOJIWON NETWORKS Co.,Ltd. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
