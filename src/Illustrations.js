import React from "react";

const illustrationsdata = [
  {
    title: "Illustrations",
    content:"Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!",
   imgsrc: "https://static.vecteezy.com/system/resources/previews/000/667/726/non_2x/people-creating-ideas-to-success-flat-design.jpg",
  },
  {
    title: "More Illustrations",
    content:"An illustration is a visualization or a depiction made by an artist, such as a drawing, sketch, painting, photograph, or other kind of image of things seen, remembered or imagined, using a graphical representation.",
    imgsrc: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/02/a72251e3-7331-4cea-8386-e88c1087380b.jpg?auto=format&q=60&fit=max&w=930",
  },
];
function Illustrations() {
  return (
    <>
      {illustrationsdata.map((obj, index) => {
        return <FinalIllustrations key={index + 1} data={obj} />;
      })}
    </>
  );
}

export default Illustrations;

function FinalIllustrations({ data }) {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4  className="stat">{data.title}</h4>
        </div>
        <div className="card-body">
          <div className="beast">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "25rem" }}
              src={data.imgsrc}
              alt="illustration"
              
            />
             
          </div>
          <h3 className="m-0 font-weight-bold text-primary">{data.content}</h3>
        </div>
      </div>
    </>
  );
}