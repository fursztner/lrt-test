import { Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();
    const [open, setOpen] = useState<string | null>(null);

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>

            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        {/* Fő menüpont */}
                        <SidebarMenuButton
                            asChild={!item.children}
                            isActive={
                                item.href ? isCurrentUrl(item.href) : false
                            }
                            onClick={() =>
                                item.children
                                    ? setOpen(
                                          open === item.title
                                              ? null
                                              : item.title,
                                      )
                                    : null
                            }
                        >
                            {item.children ? (
                                <button className="flex w-full items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        {item.icon && <item.icon />}
                                        {item.title}
                                    </span>
                                    <span>
                                        {open === item.title ? '−' : '+'}
                                    </span>
                                </button>
                            ) : (
                                <Link href={item.href!} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            )}
                        </SidebarMenuButton>

                        {/* Almenü */}
                        {item.children && open === item.title && (
                            <div className="mt-1 ml-6 space-y-1">
                                {item.children.map((child) => (
                                    <Link
                                        key={child.title}
                                        href={child.href}
                                        className="block rounded px-3 py-1 text-sm hover:bg-gray-800"
                                    >
                                        {child.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
