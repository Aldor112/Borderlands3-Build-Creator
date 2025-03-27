import { useState, useCallback } from "react";

const BorderlandsDropbox = ({
  onFileRead,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileRead: (data: any) => void;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, []);

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFile(e.target.files[0]);
      }
    },
    []
  );

  const handleFile = (file: File) => {
    if (file.type !== "application/json") {
      alert("Please upload a JSON file");
      return;
    }

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const result = event.target?.result;
        if (typeof result === "string") {
          const jsonData = JSON.parse(result);
          onFileRead(jsonData);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      className={`relative p-8 border-2 rounded-md text-center cursor-pointer transition-colors
        ${
          isDragging
            ? "bg-[#3e3e3e] border-[#ffffff]"
            : "bg-[#1a1a1a] border-[#f4d03f]"
        }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        fontFamily:
          '"Impact", "Haettenschweiler", "Arial Narrow Bold", sans-serif',
      }}
    >
      <input
        type="file"
        id="file-upload"
        accept=".json"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileInput}
      />

      <div className="space-y-4">
        <svg
          className="mx-auto h-12 w-12 text-[#f4d03f]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>

        <h3 className="text-lg font-medium text-[#f4d03f]">
          {fileName ? fileName : "Drag and drop JSON file here"}
        </h3>

        <p className="text-sm text-[#f4d03f]">
          {fileName ? "File ready for processing" : "or click to select a file"}
        </p>

        {fileName && (
          <button
            className="px-4 py-2 bg-[#2c2c2c] text-[#f4d03f] border border-[#f4d03f] rounded hover:bg-[#3e3e3e] hover:text-white"
            onClick={() => setFileName("")}
          >
            Clear File
          </button>
        )}
      </div>
    </div>
  );
};

export default BorderlandsDropbox;
