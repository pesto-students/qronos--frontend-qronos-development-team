import React from 'react'
import { s3 } from '../../context/context';

export const useDeleteAsset = () => {
    const deleteAsset = async (key) => {
        const params = {
            Bucket: 'qronos-1',
            Key: key
        }
        await s3.deleteObject(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
            } else {
                console.log('Image deleted successfully');
            }
        });
    }

    return deleteAsset
}
