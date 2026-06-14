"use client";

import { useState, useRef } from "react";
import { theme } from "@/styles/theme";
import { Camera, Upload, X, ScanLine } from "lucide-react";
import Image from "next/image";

export default function FoodScanner() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [isHover, setIsHover] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  return (
    <div
      className="h-full rounded-3xl border p-4"
      style={{
        backgroundColor: theme.colors.border,
        borderColor: theme.colors.border,
      }}
    >
      <nav className="flex justify-between items-center">
        <h1
          className="flex items-center gap-2 text-lg font-bold tracking-wider"
          style={{ color: theme.colors.text }}
        >
          <ScanLine size={22} />
          AI Food Scanner
        </h1>
      </nav>

      <div className="mt-4 space-y-4">
        {!image ? (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="rounded-2xl border-2 border-dashed hover:border-2 transition-all p-8 text-center"
            style={{
              backgroundColor: isHover
                ? `${theme.colors.border}15`
                : `${theme.colors.primary}08`,
              borderColor: isHover
                ? theme.colors.primary
                : `${theme.colors.primary}30`,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <div
                className="rounded-full p-4"
                style={{ backgroundColor: `${theme.colors.primary}15` }}
              >
                <Camera size={32} style={{ color: theme.colors.primary }} />
              </div>
              <p className="text-sm" style={{ color: theme.colors.text }}>
                Upload a photo of your food to analyze its nutritional content
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
                  style={{
                    backgroundColor: `${theme.colors.primaryDark}55`,
                    color: theme.colors.primary,
                  }}
                >
                  <Upload size={16} />
                  Upload Photo
                </button>
                <button
                  onClick={() => cameraInputRef.current?.click()}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
                  style={{
                    backgroundColor: `${theme.colors.blue}20`,
                    color: theme.colors.blue,
                  }}
                >
                  <Camera size={16} />
                  Take Photo
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="relative">
              <Image
                width={400}
                height={400}
                src={image}
                alt="Food preview"
                className="h-52 w-full rounded-2xl object-cover"
              />
              <button
                onClick={clearImage}
                className="absolute right-2 top-2 rounded-full p-1.5 transition-all"
                style={{
                  backgroundColor: `${theme.colors.coral}30`,
                  color: theme.colors.coral,
                }}
              >
                <X size={16} />
              </button>
            </div>

            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all"
              style={{
                backgroundColor: `${theme.colors.primaryDark}55`,
                color: theme.colors.primary,
              }}
            >
              <>
                <ScanLine size={16} />
                Analyze Food
              </>
            </button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
