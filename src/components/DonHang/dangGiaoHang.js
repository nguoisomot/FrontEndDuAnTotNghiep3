import react, {Component} from 'react'
import './donHang.css'
import AuthService from "../../services/auth.service";
import Title from '../title/title'

export default class DangGiaoHang extends Component{
  constructor(props){
    super(props)
    this.state={
      items:[],
      data:[],
      StringAllSanPham:''
    }
  }
  xacNhan(idDonHangChiTiet){
     AuthService.xacNhanDangGiaoHang(idDonHangChiTiet).then(
       res=>{
          AuthService.danhSachSanPhamChoXacNhan("Đóng gói vận chuyển").then(
      res => {this.setState({items:res.data.msg})
      this.setState({items:res.data.msg})
    }
    )
       }
     )
  }
  huyDonHang(idDonHangChiTiet){
    AuthService.huyDonHang(idDonHangChiTiet).then(
      res => {
        AuthService.danhSachSanPhamChoXacNhan("Đóng gói vận chuyển").then(
          res => {
            this.setState({ items: res.data.msg })
            
          }
        )
      }
    )
  }
  componentDidMount(){
    AuthService.danhSachSanPhamChoXacNhan("Đóng gói vận chuyển").then(
      res => {this.setState({items:res.data.msg})
      this.setState({items:res.data.msg})
      console.log(res.data.msg)
    }
    )
  }
  render(){
    return(
      <div>
        <Title title="Danh Sách Đang Giao Hàng" />

        <table class="table table-bordered" style={{ marginBottom: '0' }}>
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Sản Phẩm</th>
              <th scope="col">Tổng Giá</th>
              <th scope="col">Người mua</th>
              <th scope="col">SĐT</th>
              <th scope="col">Địa Chỉ</th>
              <th scope="col">Xác Nhận Đã Giao Hàng</th>
            </tr>
          </thead>
          <tbody>
          {this.state.items.map((item,index)=>{
            return (<tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.stringSanPham}</td>
              <td>{item.tongTien}đ</td>
              <td>{item.nguoiMua}</td>
              <td>{item.sdt}</td>
              <td>{item.diaChi}</td>
              <td>
              <div class="xacNhanDH">
              <button style={{marginRight:'10px'}}onClick={()=>this.xacNhan(item.idDonHangChiTiet)}>Xác Nhận</button>
                  <button onClick={() => this.huyDonHang(item.idDonHangChiTiet)}>Hủy</button>
              </div>
              </td>
             
            </tr>)
          })}
           
          </tbody>
          </table>
      </div>
    )
  }
}