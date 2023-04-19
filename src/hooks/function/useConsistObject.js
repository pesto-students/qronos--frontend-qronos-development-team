import React from 'react'
import { s3 } from '../../context/context';

export const useConsistObject = () => {
    const consistObject = async (id) => {
        let folderExists = false
        s3.listObjectsV2({
            Bucket: process.env.REACT_APP_S3_BUCKET,
            Prefix: `${id}/`,
            MaxKeys: 1
        }, function (err, data) {
            if (err) {
                folderExists = null
            } else
                folderExists = data?.Contents?.length > 0;
        });

        // console.log("folderExists", folderExists);
        return folderExists
    }
    return consistObject
}