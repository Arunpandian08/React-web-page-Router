import React from 'react';

const All = ({ data }) => {
    return (
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 pt-5 g-4">
                {data.map((item, index) => {
                    return (
                        <>
                            <div class="col mb-2">
                                <div class="card h-100">
                                    <img src={item.imageUrl} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.content}</h5>
                                        <hr />
                                        <p class="card-text">{item.paragraph}</p>
                                    </div>

                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default All;