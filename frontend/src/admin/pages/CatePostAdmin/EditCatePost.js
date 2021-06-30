import Validator from './../../../components/ValidationForm';
import catePostApi from './../../../api/catePostApi';
import { $, resetRender, currentURL } from './../../../utils';

const EditCatePost = {
    async render () {
        const idCate = currentURL().id;
        const {data : category} = await catePostApi.get(idCate);

        return /*html */ `
            <div class="container-fluid mt-4 list-cate">
                <div class="row row-table">
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between">
                            <h2>Sửa danh mục <mark>${category.name}</mark></h2>
                        </div>
                        
                        <form class="row form-add" method="POST" enctype="multipart/form-data">
                            <div class="col col-lg-6">
                                <div class="group-form">
                                    <label for="exampleInputEmail1" class="form-label">Tên</label>
                                    <input type="text" class="form-control name-cate" id="exampleInputEmail1" name="name" value="${category.name}">
                                    <span class="err-message"></span>
                                </div>
                            </div>
                            <div class="col col-lg-12 mt-4">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        `;
    },

    afterRender() {
        Validator({
            form: '.form-add',
            formGroupSelector: '.group-form',
            errorSelector: '.err-message',
            rules: [
                Validator.isRequired('.name-cate', 'Vui lòng nhập tên danh mục'),
            ],
            onSubmit: async function (category) {
                const idCate = currentURL().id;
                
                const {data } = await catePostApi.update(category, idCate);
             
                try{
                    if(data){
                        window.location.href = '/#/admin_cate-post';
                    }
                }catch(error) {
                    // console.log('Thêm danh mục không thanh công !')
                    console.log(error.response.data.error);
                }
            }
            
           
        })
    }
}

export default EditCatePost;