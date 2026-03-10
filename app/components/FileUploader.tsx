import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { formatSize } from '~/lib/utils'


interface FileUploadProps {
    onFileSelect?: (file: File | null) => void
}

const FileUploader = ({ onFileSelect }: FileUploadProps) => {
    const maxFileSize = 20 * 1024 * 1024; // 20 MB

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect?.(file);
    }, [onFileSelect])

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf'] },
        maxSize: maxFileSize // 20 MB
    })

    const file = acceptedFiles[0] || null;


    return (
        <div className='w-full gradient-border gradient-hover'>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='space-y-4 cursor-pointer'>
                    {/* <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                        <img src="/icons/info.svg" alt="upload" className='size-20' />
                    </div> */}

                    {file ? (
                        <div className='uploader-selected-file' onClick={(e) => e.stopPropagation()}>
                            <img src="/images/pdf.png" className='size-10' alt="" />
                            <div className='flex items-center space-x-3'>
                                <div>
                                    <p className='text-sm font-medium text-gray-700 truncate max-w-xs'>{file.name}</p>
                                    <p className='text-sm text-gray-500'>
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button className='p-2 cursor-pointer' onClick={(e)=> {
                                onFileSelect?.(null)
                            }}>
                                <img src="/icons/cross.svg" className='w-4 h-4' alt="remove" />
                            </button>
                        </div>

                    ) : (
                        <div>
                            <div className='mx-auto w-16 h-16 flex items-center justify-center mb-2'>
                                <img src="/icons/info.svg" alt="upload" className='size-20' />
                            </div>
                            <p className='text-lg text-gray-500'>
                                <span className='font-semibold'>
                                    click upload
                                </span> or drag & drop
                            </p>
                            <p className='text-lg text-gray-500'>
                                PDF MAX (max {formatSize(maxFileSize)})
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default FileUploader
