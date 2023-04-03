import React, { useContext } from 'react'
import { DatabaseContext, s3 } from '../../context/context';

export const useCreateAnObject = () => {
    const { setFolderKey } = useContext(DatabaseContext)
    const createAnObject = async (name) => {

        const params = {
            Bucket: process.env.REACT_APP_.S3_BUCKET,
            Key: `${name}/`,
            Body: '',
            ACL: 'public-read',
        };
        s3.putObject(params, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                setFolderKey(name)
                console.log(`Folder created successfully. ${data.Location}`);
            }
        });
    }

    return createAnObject
}