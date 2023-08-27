import "./styles.scss"
import React, {useState} from "react";
import LogoutIcon from '@mui/icons-material/Logout';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom"
import { addProduct } from "../../axios/api-calls"

export function Profile() {
    const user = useSelector((state) => state.user.currentUser);

    const name = user.name;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imgs, setImgs] = useState("");
    const [price, setPrice] = useState(0);
    const [categories, setCategories] = useState("");
    const [sizes, setSizes] = useState("");
    const [quantities, setQuantities] = useState("");

    const handleProduct = async (e) => {
        e.preventDefault()
        addProduct({"title":title, "description": description, "imgs":imgs.split(","), "price":price, "categories":categories.split(","), "sizes": sizes.split(","), "quantities": quantities.split(",")}).then(response => {
          resetProduct()
        }).catch(error => {
            console.error(error);
        });

    }
    const resetProduct = () => {
        setTitle("")
        setDescription("")
        setImgs("")
        setPrice("")
        setCategories("")
        setSizes("")
        setQuantities("")
    }
    return (
        <div>
            <div className="profile">
                <div className="wrapper">
                    <div className="profile-session">
                        <div className="profile-cover">

                            <img className="profile-cover-img" src="https://img.freepik.com/fotos-premium/paisagem-bonita_157744-1239.jpg" />
                            <img className="profile-user-img" src="https://www.arauco.cl/brasil/wp-content/uploads/sites/17/2021/08/CINZA-PURO-185x275--scaled.jpg"/>

                        </div>
                        <div className="profile-info">
                            <div className="profile-info-itens">
                                <h1 className="name">{name}</h1>
                                <button className="button-logout" onClick={handleLogout}><LogoutIcon style={{marginRight: '15px'}}/>Sair</button>
                            </div>
                        <div className="add-product">
                            <button onClick={openModal}>Adicionar Produto</button>
                            {isOpen && (
                                <div className="modal-overlay">
                                    <div className="modal-content">
                                        <form>
                                            <label for="title">Nome do Produto:</label>
                                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} name="title" required/>

                                            <label for="description">Descrição:</label>
                                            <input id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

                                            <label for="imgs">Imagens (separe por vírgula):</label>
                                            <input type="text" id="imgs" name="imgs" value={imgs} onChange={(e) => setImgs(e.target.value)}/>

                                            <label for="price">Preço:</label>
                                            <input type="number" id="price" name="price" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required/>

                                            <label for="categories">Categorias (separe por vírgula):</label>
                                            <input type="text" id="categories" name="categories"  value={categories} onChange={(e) => setCategories(e.target.value)} required/>

                                            <label for="sizes">Tamanhos (separe por vírgula):</label>
                                            <input type="text" id="sizes" name="sizes"  value={sizes} onChange={(e) => setSizes(e.target.value)} />

                                            <label for="quantities">Quantidades (separe por vírgula):</label>
                                            <input type="text" id="quantities" name="quantities" value={quantities} onChange={(e) => setQuantities(e.target.value)} />

                                            <button onClick={handleProduct} type="submit">Criar Produto</button>
                                        </form>
                                        
                                        <button style={{backgroundColor:"red"}} onClick={closeModal}>Cancelar</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};