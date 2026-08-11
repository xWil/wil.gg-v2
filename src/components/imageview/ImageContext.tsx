import {createContext, useContext, useState, type ReactNode } from "react";

interface ImageContextType {
    image: string | null,
    setImage: (image: string | null) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
    const [image, setImage] = useState<string | null>(null);

    return (
        <ImageContext.Provider value={{ image, setImage }}>
            { children }
        </ImageContext.Provider>
    )
}

export function useImage() {
    const context = useContext(ImageContext);
    if (context === undefined) {
        throw new Error("useImage must be used within an ImageProvider");
    }
    return context;
}
