interface args {
  link: string;
}

const DownloadModal = ({ link }: args) => {
  return (
    <div>
      <a download href={link}>
        Download
      </a>
    </div>
  );
};

export default DownloadModal;
