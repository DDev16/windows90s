const [selectedImage, setSelectedImage] = useState(null);

const handleFileSelect = (e) => {
  setSelectedImage(e.target.files[0]);
};

return (
  <div>
    <input type="file" onChange={handleFileSelect} />
    {selectedImage && <img src={URL.createObjectURL(selectedImage)} />}
  </div>
);

const handleFileSelect = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setSelectedImage(reader.result);
  };
};

const [images, setImages] = useState([]);

const handleFileSelect = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setImages([...images, reader.result]);
  };
};

return (
  <div>
    <input type="file" onChange={handleFileSelect} />
    {images.map((image, index) => (
      <img key={index} src={image} />
    ))}
  </div>
);
