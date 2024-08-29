import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item);
    this.presentToast('Producto eliminado del carrito');
  }

  async checkout() {
    this.cartService.clearCart();
    this.presentToast('Pago exitoso');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}