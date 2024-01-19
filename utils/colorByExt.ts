const extColor = {
    pdf: 'red-500',     // Red for PDFs, as PDFs are often associated with importance.
    xls: 'green-500',   // Green for Excel files, matching the color of the Excel icon.
    doc: 'blue-500',    // Blue for Word documents, reflecting the Word icon color.
    txt: 'gray-500',    // Gray for text files, as they are plain and simple.
    png: 'yellow-500',  // Yellow for PNG images, a bright and attention-grabbing color.
    jpg: 'indigo-500',  // Indigo for JPEG images, offering a distinct color from PNG.
    jpeg: 'indigo-500', // Same as JPG.
    zip: 'purple-500',
    unknown: 'gray-700'  
} as const;

export type Extension = keyof typeof extColor;
export type Color = typeof extColor[Extension];

export const colorByExt = (ext: string):Color => {
    if (ext in extColor) {
        return extColor[ext];
    } else {
        return extColor["unknown"]
    }
}