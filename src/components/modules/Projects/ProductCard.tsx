"use client";
import SpotlightCard from "@/Components/SpotlightCard/SpotlightCard";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { ArrowBigUp, Link2 } from "lucide-react";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Project }) => {
  return (
    <SpotlightCard
      className={cn("border p-5 rounded-md bg-slate-800", product.customClass)}
    >
      <div className="flex justify-between">
        <h2 className="font-bold ">{product?.title}</h2>
        <div className="flex gap-2">
          {product?.href && (
            <Link href={product?.href} target="_blank">
              <Link2 className="cursor-pointer" />
            </Link>
          )}
          <p
            className={cn(
              "text-xs text-zinc-400 border px-2 py-1 rounded-2xl max-h-6",
              product?.status === "Completed" &&
                "text-green-100 border-green-700",
              product?.status === "In Progress" &&
                "text-yellow-100 border-yellow-700",
              product?.status === "On Hold" && "text-red-100 border-red-700"
            )}
          >
            {product?.status}
          </p>
        </div>
      </div>
      <p className="mb-4 mt-2 text-zinc-400">{product?.des}</p>
      <div className="flex gap-4 flex-wrap">
        {product?.tech.map((tech: string, i: number) => (
          <div key={i} className="bg-zinc-500 px-3 py-1 rounded-2xl">
            <p className="text-xs">{tech}</p>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
};
