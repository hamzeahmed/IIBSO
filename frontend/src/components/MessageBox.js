import React from 'react'

export default function MessageBox(props) {
    return (
        <div class="container my-5">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Ogaysiin!</strong> {props.children}.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
