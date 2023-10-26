

import Image from "next/image"

export const ImageViewer = ({src, height = "auto"} : {src: string, height: string, theme: string}) => {
    return(
        <div className="relative w-full h-auto min-h-64 flex justify-center">
            <img src={src} alt={src} style={{
                width: height === "auto" ? "100%":"auto",
                height: height,
                objectFit: "contain",
                boxShadow: "0px 0px 10px rgba(200, 200, 200, 1)",
                borderRadius: "16px"
            }}/>
        </div>
    )
}