import React, { useEffect, useState } from 'react'
import { s3 } from '../../context/context'
import Sidebar from './components/Sidebar'
const LoadImages = () => {

  const [file, setFile] = useState()
  useEffect(() => {
    console.log(file);
    if (file)
      s3.upload({
        Bucket: "qronos-1",
        Key: `testing/${file.name}`,
        Body: file,
      }, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          console.log(`File uploaded successfully. ${data.Location}`);
        }
      })
  }, [file])

  const getAllImages = async () => {
    await s3.listObjectsV2(
      {
        Bucket: 'qronos-1',
        Prefix: 'testing/'
      },
      (err, data) => {
        if (err)
          console.log(err);
        else {
          const assets = data.Contents.filter(obj => obj.Key.match(/\.(jpg|jpeg|png|gif)$/i));
          console.log(assets);
        }
      }
    )
  }

  useEffect(() => {
    getAllImages()
  }, [])

  const createAnObject = async () => {
    const params = {
      Bucket: 'qronos-1',
      Key: `asdasdas/`,
      Body: '',
      ACL: 'public-read',
    };
    s3.putObject(params, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
        console.log(`Folder created successfully. ${data.Location}`);
      }
    });
  }

  const deleteAsset = async () => {
    const params = {
      Bucket: 'qronos-1',
      Key: "testing/Untitled Diagram-Work Flow.drawio (3).png",
    }
    await s3.deleteObject(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log('Image deleted successfully');
      }
    });
  }

  return (
    <div class="relative">
      <Sidebar />
      <div class="mx-auto xl:ml-16 xl:pl-4">
        <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
          <div class="px-8 py-6 bg-white overflow-hidden rounded-xl">
            <a class="flex flex-wrap items-center mb-2 text-neutral-500 hover:text-neutral-600" href="#">
              <svg class="mr-3.5" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.13634 11.197C5.42923 11.4899 5.9041 11.4899 6.197 11.197C6.48989 10.9041 6.48989 10.4292 6.197 10.1363L5.13634 11.197ZM1 6.00001L0.46967 5.46968C0.329018 5.61033 0.25 5.8011 0.25 6.00001C0.25 6.19892 0.329018 6.38969 0.46967 6.53034L1 6.00001ZM6.197 1.86367C6.48989 1.57078 6.48989 1.09591 6.197 0.803013C5.9041 0.51012 5.42923 0.51012 5.13634 0.803013L6.197 1.86367ZM13 6.75001C13.4142 6.75001 13.75 6.41422 13.75 6.00001C13.75 5.5858 13.4142 5.25001 13 5.25001V6.75001ZM6.197 10.1363L1.53033 5.46968L0.46967 6.53034L5.13634 11.197L6.197 10.1363ZM1.53033 6.53034L6.197 1.86367L5.13634 0.803013L0.46967 5.46968L1.53033 6.53034ZM1 6.75001L13 6.75001V5.25001L1 5.25001L1 6.75001Z" fill="currentColor"></path></svg><span>Back to Home</span></a>
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-full md:w-1/2 p-2">
                <h3 class="font-heading mb-1.5 font-semibold text-4xl" contenteditable="false">Media Library</h3>

              </div>
              <div class="w-full md:w-1/2 p-2">
                <div class="flex flex-wrap md:justify-end">
                  <div class="w-auto"><button class="inline-flex flex-wrap items-center justify-center px-5 py-2.5 w-full font-medium text-sm text-center text-neutral-50 hover:text-neutral-100 bg-neutral-600 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400" href="#">+ Upload Asset</button></div>
                  <div class="w-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>


        <section class="overflow-hidden">
          <div class="container mx-auto">
            <div class="bg-white border rounded-xl">
              <div class="flex divide-y sm:divide-y-0 sm:divide-x justify-center p-20">

                <div class="w-full sm:w-1/2">
                  <div class="text-center p-5 border-blue-200">
                    <img class="mb-7 mx-auto" src="https://static.shuffle.dev/uploads/files/44/4434a55ce5c9032641506a0553453f21d76da99a/EmptyDocuments.svg" alt="" />
                    <h3 class="mb-3 font-heading text-lg font-semibold">Upload Your First Asset</h3>
                    <input type="file" name="" id="" onChange={e => setFile(e.target.files[0])} />
                    <button class="inline-flex flex-wrap items-center justify-center px-6 py-2.5 border hover:border-neutral-200 rounded-lg bg-purple-200 text-lg font-bold" href="#">
                      <svg class="mr-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.74935 2.66663C8.74935 2.25241 8.41356 1.91663 7.99935 1.91663C7.58514 1.91663 7.24935 2.25241 7.24935 2.66663H8.74935ZM7.24935 13.3333C7.24935 13.7475 7.58514 14.0833 7.99935 14.0833C8.41356 14.0833 8.74935 13.7475 8.74935 13.3333H7.24935ZM13.3327 8.74996C13.7469 8.74996 14.0827 8.41417 14.0827 7.99996C14.0827 7.58575 13.7469 7.24996 13.3327 7.24996L13.3327 8.74996ZM2.66602 7.24996C2.2518 7.24996 1.91602 7.58575 1.91602 7.99996C1.91602 8.41417 2.2518 8.74996 2.66602 8.74996L2.66602 7.24996ZM7.24935 2.66663V13.3333H8.74935V2.66663H7.24935ZM13.3327 7.24996L2.66602 7.24996L2.66602 8.74996L13.3327 8.74996L13.3327 7.24996Z" fill="#0C1523"></path>
                      </svg><span class="font-medium">Add A Asset</span></button>
                    <button onClick={() => createAnObject()}>Create an object</button>
                    <button onClick={() => deleteAsset()}>Delete an object</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>











    </div>














  )
}

export default LoadImages