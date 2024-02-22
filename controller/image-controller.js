import { request, response } from "express";
import File from "../models/file.js";

export const uploadImage = async (request, response) => {
  const fileobj = {
    path: request.file.path,
    name: request.file.originalname,
  };
  console.log(request);
  try {
    const file = await File.create(fileobj);
    response.status(200).json({ path: `/file/${file._id}` });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);
    if (!file) {
      return response.status(404).json({ error: "File not found" });
    }
    file.downloadContent++; // Assuming it's downloadCount, not downloadContent
    await file.save();
    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ error: error.message });
  }
};
