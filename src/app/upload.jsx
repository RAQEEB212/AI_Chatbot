// components/UploadButton.js
import React, { useRef } from 'react';

function UploadButton() {
    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileSelected = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Handle the selected file here
            console.log('Selected file:', selectedFile);
        }
    };

    return (
        <div >
            <button
                onClick={handleFileUpload}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-full font-bold py-2 px-4 rounded"
            >
                {/*<span className="mr-2">Upload File</span>*/}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </button>
            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileSelected}
            />
        </div>
    );
}

export default UploadButton;
