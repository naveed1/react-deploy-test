import React, { Component } from 'react';
import Modal, { ReactModal } from 'react-modal';



class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal() {
        this.setState({"showModal": true});
    }

  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank">
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

      var expandImage = (e) => {
          this.handleOpenModal();
      }

      var isModalOpen = this.state.showModal;

      var drawings = this.props.data.projects.map((drawings) => {
        var projectImage = 'images/portfolio/'+drawings.image;
        return <div key={drawings.title} className="columns portfolio-item" onClick={expandImage}>
            <ReactModal isOpen={this.state.showModal}>

            </ReactModal>
           <div className="item-wrap">

               <img alt={drawings.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{drawings.title}</h5>
                     <p>{drawings.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>

          </div>
        </div>
      })

     
    }


    function enterFunc(e)  {
        if(e.currentTarget.classList.contains("twelve") && !e.currentTarget.classList.contains("bg-color-grey")){
            e.currentTarget.classList.add("bg-color-grey");
            e.currentTarget.getElementsByTagName("h1").item(0).classList.add("text-color-white");
            if(e.currentTarget.nextElementSibling != null){
                e.currentTarget.nextElementSibling.classList.remove("bg-color-grey");
                e.currentTarget.nextElementSibling.getElementsByTagName("h1").item(0).classList.remove("text-color-white");
            } else{
                e.currentTarget.previousElementSibling.classList.remove("bg-color-grey");
                e.currentTarget.previousElementSibling.getElementsByTagName("h1").item(0).classList.remove("text-color-white");
            }
        }

    }

    function leaveFunc(e) {
        //
    }

    return (
      <section id="portfolio">

      <div className="row mfp-inline-holder" style={{maxWidth: "100%", display: "flex"}}>

         <div className="twelve columns collapsed bg-color-grey" onMouseEnter={enterFunc} onMouseLeave={leaveFunc}>

            <h1 className="text-color-white">My Thoughts</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>

         <div className="twelve columns collapsed" onMouseEnter={enterFunc} onMouseLeave={leaveFunc}>

            <h1>My Art</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {drawings}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
