"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export default function NewButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-sqaure">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition p-1">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none  w-[300px]">
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
}
