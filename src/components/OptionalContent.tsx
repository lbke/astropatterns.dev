import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'


export function OptionalContent({ title, children }: {
    title: string | React.ReactNode,
    children: React.ReactNode
}) {
    return (
        <div
            className="bg-gray-100 dark:bg-gray-900 
        p-4 -mr-4 
        rounded-lg mt-8
        "
        >

            <Disclosure >
                <DisclosureButton className="group flex items-center justify-center gap-2 w-full">
                    {title}
                    <div className="flex items-center font-bold">
                        <span>Click to toggle a short summary</span>
                        <div className="i-ph-arrow-circle-down-fill w-5 group-data-[open]:rotate-180" />
                    </div>
                </DisclosureButton>
                <DisclosurePanel
                    transition
                    className="
                    origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0
                    mt-8" >
                    {children}
                </DisclosurePanel>

            </Disclosure>
        </div>
    )

}