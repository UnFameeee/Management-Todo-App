import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logOut } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

const PrimaryColor = styled.div`

`;

const BgColor = styled.div`
    background-color: black;
`;

const BxShadow = styled.div`

`;

const TextColor = styled.div`

`;

function handleClickedHomepage() {
  window.location.replace('/home')
}

export default function Header() {
  const dispatch = useDispatch(); 

  const logout = () =>{
    logOut(dispatch)
  }

  return (
    <>
      <div className="header-wrapper">
        <div className="div-2">
          <div className="div-3" onClick={handleClickedHomepage}>
            <div className="div-4">
              <picture>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F945ae863a3da4d54b07c53d31d525dee"
                  className="image"
                />
              </picture>
              <div className="builder-image-sizer image-sizer" />
            </div>
            <div className="div-5">Tenent</div>
          </div>
          <div className="div-6">
            <div className="builder-columns div-7">
              <div className="builder-column column">
                <div className="div-8">
                  <picture>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F3b3f46e119b34eacb74a9b350191458c"
                      className="image"
                    />
                  </picture>
                  <div className="builder-image-sizer image-sizer-2" />
                </div>
              </div>
              <div className="builder-column column-2">
                <div className="div-9">
                  <picture>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a196aee55074ffe92ed55d279a21a14"
                      className="image"
                    />
                  </picture>
                  <div className="builder-image-sizer image-sizer-3" />
                </div>
              </div>
              <div className="builder-column column-3">
                <div className="div-10">
                  <div className="div-11">Hoàng Vũ</div>
                  <div className="div-12">Frontend Dev</div>
                </div>
              </div>
              <div className="builder-column column-4">
              <div className="div-13">
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb98d12684f034dc1b8113c435835caca"
                    className="image"
                  />
                </picture>
              </div>
            </div>         
            </div>
            <div className="header-menu">
              <Link to="/logs" className="menu-list">
                <FontAwesomeIcon icon={faClipboardList}/>
                <span style={{marginLeft:'24px'}}>History</span>
              </Link>
              <Link to="/login" className="menu-list" onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket}/>
                <span style={{marginLeft:'20px'}}>Log Out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .header-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background-color: rgba(83, 83, 83, 1);
        }
        .div-2 {
          padding: 0 50px;
          max-height: 60px;
          height: 60px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: black;
        }
        .div-3 {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          max-width: 167px;
          justify-content: space-between;
          align-items: center;
        }
        .div-4 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 35px;
          max-height: 35px;
          width: 35px;
        }
        .image {
          object-fit: contain;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 72.3404255319149%;
          pointer-events: none;
          font-size: 0;
        }
        .div-5 {          
          align-items: center;
          display: flex;
          max-width: 105px;
          margin-left: 18px;
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: center;
          font-family: Inter, sans-serif;
        }
        .div-6 {
          cursor: pointer;
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .div-6:hover .header-menu {
          display: flex;
        }
        .header-menu {
          z-index: 100;
          flex-direction: column;
          justify-content: center;
          width: 88%;
          background-color: black;
          position: absolute;
          top: 100%;
          right: 0;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
          display: none;
        }
        .header-menu .menu-list {
          text-decoration: none;
          color: white;
          margin: 15px 0 0 10px;
        }
        .header-menu .menu-list:hover {
          color: red;
        }
        .header-menu .menu-list:last-child {
          margin-bottom: 15px;
        }
        .header-menu .menu-list svg {
          margin-left: 20px;
          height: 20px
        }
        .div-7 {
          display: flex;
          align-items: center;
          max-height: 56px;
        }
        @media (max-width: 999px) {
          .div-7 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
        }
        @media (max-width: 999px) {
          .column {
            width: 100%;
          }
        }
        .div-8 {
          display: flex;
          position: relative;
          width: 25px;
        }
        .image-sizer-2 {
          width: 100%;
          padding-top: 160.91954022988506%;
          pointer-events: none;
          font-size: 0;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          margin-left: 10px;
        }
        @media (max-width: 999px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-9 {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 40px;
          max-height: 40px;
          width: 40px;
        }
        .image-sizer-3 {
          width: 100%;
          padding-top: 98.59154929577466%;
          pointer-events: none;
          font-size: 0;
        }
        .column-3 {
          display: flex;
          justify-content: center;
          flex-direction: column;
          line-height: normal;          
          margin-left: 15px;
        }
        @media (max-width: 999px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-10 {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .div-11 {
          max-width: 150px;
          color: rgba(255, 255, 255, 1);
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 0%;
          text-align: center;
          font-family: Inter, sans-serif;
        }
        .div-12 {
          max-width: 115px;
          margin-top: 4px;
          color: rgb(221 207 233);
          font-size: 12px;
          letter-spacing: 0%;
          text-align: center;
          font-family: Inter, sans-serif;
        }
        .column-4 {
          display: flex;
          justify-content: center;
          flex-direction: column;
          line-height: normal;
          margin-left: 15px;
        }
        @media (max-width: 999px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-13 {
          cursor: pointer;
          display: flex;
          position: relative;
          min-width: 10px;
          min-height: 10px;
          max-width: 15px;
          width: 15px;
        }
        .image-sizer-4 {
          width: 100%;
          padding-top: 64%;
          pointer-events: none;
          font-size: 0;
        }
      `}</style>
    </>
  );
}
