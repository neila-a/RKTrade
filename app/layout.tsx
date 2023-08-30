import {
    ReactNode
} from "react"
export default function Layout(props: {
    children: ReactNode
}) {
    return (
        <html lang="zh-cmn-Hans-CN">
            <body>
                {props.children}
            </body>
        </html>
    )
};