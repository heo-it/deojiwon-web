"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md h-16 md:h-20 fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="더지원네트웍스 로고"
              width={120}
              height={40}
              className="md:w-[180px] md:h-[60px] w-[120px] h-[40px] object-contain"
              priority
            />
          </div>
          <span className="text-[10px] text-gray-600 ml-1 hidden md:block">
            (주) 더지원네트웍스
          </span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
          <a
            href="/network-construction-content"
            className="hover:text-blue-600 transition"
          >
            네트워크 공사
          </a>
          <a href="#design" className="hover:text-blue-600 transition">
            네트워크 설계/구축
          </a>
          <a href="#maintenance" className="hover:text-blue-600 transition">
            정보통신 유지보수
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            회사소개
          </a>
        </nav>

        <div className="text-xs md:text-sm text-right leading-tight hidden md:block">
          <p className="text-blue-800 font-semibold mb-1">
            설계/구축/상담 : <span className="text-black">070-4035-0380</span>
          </p>
          <p className="text-xs text-gray-600">
            전화로 자세한 상담 및 견적을 확인하세요
          </p>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md py-4 px-6 z-40">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-800">
            <a href="#network-construction" onClick={toggleMenu}>
              네트워크 공사
            </a>
            <a href="#design" onClick={toggleMenu}>
              네트워크 설계/구축
            </a>
            <a href="#maintenance" onClick={toggleMenu}>
              정보통신 유지보수
            </a>
            <a href="#about" onClick={toggleMenu}>
              회사소개
            </a>
            <div className="mt-2 text-sm text-blue-800">
              설계/구축/상담 : <span className="text-black">070-4035-0380</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
