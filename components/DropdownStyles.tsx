"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { styles } from "@/lib/data";
import { useStyleStore } from "@/lib/stateManagement";

export function DropdownStyles() {
  const [open, setOpen] = React.useState(false);
  const [styleVal, setStyleVal] = React.useState("");
  const changeStyle = useStyleStore((state) => state.changeStyle);

  changeStyle(styleVal);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {styleVal
            ? styles.find((style) => style.value === styleVal)?.label
            : "Styles"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search style..." />
          <CommandEmpty>No styles found.</CommandEmpty>
          <CommandGroup>
            {styles.map((style) => (
              <CommandItem
                key={style.value}
                onSelect={(currentValue) => {
                  setStyleVal(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    styleVal === style.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {style.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
