// "Inside Abhinandan" facility film.
export default function InsideVideo() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      style={{ border: "1px solid var(--line)", boxShadow: "0 30px 60px -36px rgba(10,42,94,0.5)" }}
    >
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/n1qRXlwoz-4?rel=0"
          title="Inside Abhinandan — facility film"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
