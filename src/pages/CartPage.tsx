import Cart from "../components/Organisms/Cart";
import NavBar from "../components/Molecules/NavBar";
import PageName from "../components/Atoms/PageName";

export default function CartPage() {
  return (
    <div>
      <NavBar />
      <div className="my-2 mx-5">
        <PageName title="Cart" />
      </div>
      <Cart />
    </div>
  );
}
