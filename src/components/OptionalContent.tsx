import { useState } from "react"

export function OptionalContent({ title, children }: {
    title: string | React.ReactNode,
    children: React.ReactNode
}) {
    const [open, setOpen] = useState(false)
    // TODO: the padding creates a small shift...
    return (
        <div className="bg-gray-100 dark:bg-gray-900 
        p-4 -mr-4 
        rounded-lg mt-8
        ">
            <div className="text-center">
                {!open
                    ? <span>{title}{" "} </span>
                    : null}
                <button className="rounded font-bold" onClick={() => { setOpen(open => !open) }}>
                    {
                        open
                            ? "Close"
                            : "Click to read more"
                    }
                </button>
            </div>
            <div
                /* TODO animate */
                className={`${open ? "block" : "hidden"}`}
            >
                {children}

            </div>

        </div>
    )

}