import { useReactMediaRecorder } from "react-media-recorder";

function Record() {

  const {
    status, 
    startRecording, 
    stopRecording, mediaBlobUrl
  }= useReactMediaRecorder({ audio:true})
  const handleSave= async ()=> {
    const audioBlob= await fetch(mediaBlobUrl).then((r)=>r.blob());
    const audioFile=new File([audioBlob], 'voice.mp3', {type:'audio/mp3'});
    const formData= new FormData();
  };


  return (
    <>
    <p> {status}</p>
    <button onClick={startRecording}> Record</button>
    <button onClick={stopRecording}>Stop </button>
    <button onClick={handleSave}>save  </button>
    <audio src={mediaBlobUrl} controls autoplay />
    </>
  ); 
};
export default Record; 