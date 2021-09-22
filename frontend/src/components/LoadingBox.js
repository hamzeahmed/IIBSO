import React from 'react'

export default function LoadingBox() {
    return (
        <div class="container center my-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
