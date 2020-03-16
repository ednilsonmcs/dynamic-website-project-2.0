import React from 'react'

const DevIcon = () => (
  <svg className="mx-auto mb-4" width={71} height={56} overflow="hidden">
      <defs>
        <clipPath id="devIcon">
          <path d="M402 553h71v56h-71z" fillRule="evenodd" clipRule="evenodd" />
        </clipPath>
      </defs>
      <g
        clipPath="url(#devIcon)"
        transform="translate(-402 -553)"
        stroke="#5A88B6"
        strokeMiterlimit={8}
        fill="none"
      >
        <path d="M426.926 595.5L416.5 586l10.426-9.5 2.574 2.348-7.833 7.152 7.833 7.152-2.574 2.348zM449.876 595.5l-2.376-2.348 7.23-7.152-7.23-7.152 2.376-2.348 9.624 9.5-9.624 9.5zM431.862 595.078l8.237-19.876 3.182 1.319-8.237 19.876z" />
        <path d="M403.5 554.5v54h69v-54zm59.513 5.226c.952 0 1.725.78 1.725 1.742s-.773 1.742-1.725 1.742c-.953 0-1.725-.78-1.725-1.742s.772-1.742 1.725-1.742zm-6.038 0c.953 0 1.725.78 1.725 1.742s-.772 1.742-1.725 1.742c-.953 0-1.725-.78-1.725-1.742s.772-1.742 1.725-1.742zm-6.037 0c.952 0 1.725.78 1.725 1.742s-.773 1.742-1.725 1.742c-.953 0-1.725-.78-1.725-1.742s.772-1.742 1.725-1.742zm16.387 43.548h-58.65v-34.838h58.65z" />
      </g>
    </svg>
)

export default DevIcon