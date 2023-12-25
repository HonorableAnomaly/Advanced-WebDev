import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button
        onClick={handleClose}
        primary
      >
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={actionBar}
    >
      <p>MODALS!</p>
    </Modal>
  );

  return (
    <div>
      <Button
        primary
        onClick={handleClick}
        onClose={handleClose}
      >
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies accumsan felis iaculis convallis. Mauris ultricies nisi quis finibus pharetra. Proin
        id dui elementum, vestibulum nisl non, pulvinar eros. Praesent ac erat magna. Phasellus vel pretium tellus, eu faucibus tortor. Aliquam erat volutpat. Nam
        sagittis erat tortor, id dictum quam mattis non. Curabitur dictum mauris vitae augue mollis aliquam. Proin elit elit, facilisis in sagittis nec, malesuada eget
        dui. Donec et maximus enim. Phasellus venenatis lacinia neque nec hendrerit. Aenean euismod viverra tristique. Nulla sed diam ex. Aenean purus nisl, viverra nec
        egestas non, hendrerit non libero. Nam malesuada commodo felis, a tempor metus venenatis non. Phasellus congue ut lorem a rutrum. Aenean lacinia, tellus ut
        ullamcorper laoreet, nunc justo pulvinar odio, quis varius nisi leo ac massa. Fusce augue erat, malesuada sit amet placerat sit amet, interdum ut leo. Nunc vitae
        risus congue, laoreet diam non, sodales sapien. Mauris volutpat sollicitudin mi, et fermentum augue. Nam sollicitudin nec urna ac fringilla. Maecenas at enim vel
        neque semper efficitur. Vivamus facilisis ac justo quis hendrerit. Vestibulum egestas vel nisi non gravida. Maecenas odio ipsum, tempor a augue nec, hendrerit
        ullamcorper enim. Pellentesque elementum magna nunc, a scelerisque lacus porttitor vitae. Nulla facilisi. Morbi risus turpis, scelerisque et egestas eget,
        fringilla at velit. Nam tincidunt augue non odio eleifend, non fringilla libero mattis. Duis fringilla ex ac odio aliquam, ac lobortis felis sollicitudin. In
        vehicula vestibulum felis, vitae dictum magna consequat vitae. Curabitur quis libero sed lectus fringilla accumsan. Cras bibendum arcu id nibh aliquam, eu iaculis
        dui vulputate. Nulla facilisi. Ut sit amet bibendum lacus. In ipsum elit, ultricies quis lacus in, scelerisque imperdiet sem. Morbi consectetur dictum mi blandit
        consequat. Donec sit amet vulputate neque, non laoreet ex. Etiam blandit mollis cursus. Duis eget orci at nibh facilisis convallis sed quis urna. Proin eu turpis
        in mauris ornare condimentum nec quis libero. Nam nec orci mauris. Cras sed vestibulum nulla. Nullam maximus, sapien a tristique scelerisque, ante lacus iaculis
        sem, vestibulum tempus metus ante quis nisl. In rhoncus sodales ante, eu porttitor sapien vehicula nec. Ut bibendum urna at quam vehicula, et faucibus ante
        eleifend. Quisque semper rhoncus porta. Cras nec mauris quis orci ullamcorper luctus nec sed neque. Pellentesque ut nisi diam. Aliquam erat volutpat. In ac
        pharetra nunc, id convallis purus. Sed finibus nisl id tempus semper. Aenean dapibus consequat ex, sed maximus est vestibulum eget. Phasellus mi odio, auctor in
        arcu tempus, ullamcorper elementum nulla. Fusce massa arcu, pharetra ac nisi et, volutpat porttitor nibh. Phasellus commodo dui sit amet turpis bibendum, eu
        pharetra magna tincidunt. Aenean velit libero, lacinia at gravida non, vestibulum eget tellus. Sed et urna ac elit sagittis pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies accumsan felis iaculis convallis. Mauris ultricies nisi quis finibus pharetra. Proin
        id dui elementum, vestibulum nisl non, pulvinar eros. Praesent ac erat magna. Phasellus vel pretium tellus, eu faucibus tortor. Aliquam erat volutpat. Nam
        sagittis erat tortor, id dictum quam mattis non. Curabitur dictum mauris vitae augue mollis aliquam. Proin elit elit, facilisis in sagittis nec, malesuada eget
        dui. Donec et maximus enim. Phasellus venenatis lacinia neque nec hendrerit. Aenean euismod viverra tristique. Nulla sed diam ex. Aenean purus nisl, viverra nec
        egestas non, hendrerit non libero. Nam malesuada commodo felis, a tempor metus venenatis non. Phasellus congue ut lorem a rutrum. Aenean lacinia, tellus ut
        ullamcorper laoreet, nunc justo pulvinar odio, quis varius nisi leo ac massa. Fusce augue erat, malesuada sit amet placerat sit amet, interdum ut leo. Nunc vitae
        risus congue, laoreet diam non, sodales sapien. Mauris volutpat sollicitudin mi, et fermentum augue. Nam sollicitudin nec urna ac fringilla. Maecenas at enim vel
        neque semper efficitur. Vivamus facilisis ac justo quis hendrerit. Vestibulum egestas vel nisi non gravida. Maecenas odio ipsum, tempor a augue nec, hendrerit
        ullamcorper enim. Pellentesque elementum magna nunc, a scelerisque lacus porttitor vitae. Nulla facilisi. Morbi risus turpis, scelerisque et egestas eget,
        fringilla at velit. Nam tincidunt augue non odio eleifend, non fringilla libero mattis. Duis fringilla ex ac odio aliquam, ac lobortis felis sollicitudin. In
        vehicula vestibulum felis, vitae dictum magna consequat vitae. Curabitur quis libero sed lectus fringilla accumsan. Cras bibendum arcu id nibh aliquam, eu iaculis
        dui vulputate. Nulla facilisi. Ut sit amet bibendum lacus. In ipsum elit, ultricies quis lacus in, scelerisque imperdiet sem. Morbi consectetur dictum mi blandit
        consequat. Donec sit amet vulputate neque, non laoreet ex. Etiam blandit mollis cursus. Duis eget orci at nibh facilisis convallis sed quis urna. Proin eu turpis
        in mauris ornare condimentum nec quis libero. Nam nec orci mauris. Cras sed vestibulum nulla. Nullam maximus, sapien a tristique scelerisque, ante lacus iaculis
        sem, vestibulum tempus metus ante quis nisl. In rhoncus sodales ante, eu porttitor sapien vehicula nec. Ut bibendum urna at quam vehicula, et faucibus ante
        eleifend. Quisque semper rhoncus porta. Cras nec mauris quis orci ullamcorper luctus nec sed neque. Pellentesque ut nisi diam. Aliquam erat volutpat. In ac
        pharetra nunc, id convallis purus. Sed finibus nisl id tempus semper. Aenean dapibus consequat ex, sed maximus est vestibulum eget. Phasellus mi odio, auctor in
        arcu tempus, ullamcorper elementum nulla. Fusce massa arcu, pharetra ac nisi et, volutpat porttitor nibh. Phasellus commodo dui sit amet turpis bibendum, eu
        pharetra magna tincidunt. Aenean velit libero, lacinia at gravida non, vestibulum eget tellus. Sed et urna ac elit sagittis pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies accumsan felis iaculis convallis. Mauris ultricies nisi quis finibus pharetra. Proin
        id dui elementum, vestibulum nisl non, pulvinar eros. Praesent ac erat magna. Phasellus vel pretium tellus, eu faucibus tortor. Aliquam erat volutpat. Nam
        sagittis erat tortor, id dictum quam mattis non. Curabitur dictum mauris vitae augue mollis aliquam. Proin elit elit, facilisis in sagittis nec, malesuada eget
        dui. Donec et maximus enim. Phasellus venenatis lacinia neque nec hendrerit. Aenean euismod viverra tristique. Nulla sed diam ex. Aenean purus nisl, viverra nec
        egestas non, hendrerit non libero. Nam malesuada commodo felis, a tempor metus venenatis non. Phasellus congue ut lorem a rutrum. Aenean lacinia, tellus ut
        ullamcorper laoreet, nunc justo pulvinar odio, quis varius nisi leo ac massa. Fusce augue erat, malesuada sit amet placerat sit amet, interdum ut leo. Nunc vitae
        risus congue, laoreet diam non, sodales sapien. Mauris volutpat sollicitudin mi, et fermentum augue. Nam sollicitudin nec urna ac fringilla. Maecenas at enim vel
        neque semper efficitur. Vivamus facilisis ac justo quis hendrerit. Vestibulum egestas vel nisi non gravida. Maecenas odio ipsum, tempor a augue nec, hendrerit
        ullamcorper enim. Pellentesque elementum magna nunc, a scelerisque lacus porttitor vitae. Nulla facilisi. Morbi risus turpis, scelerisque et egestas eget,
        fringilla at velit. Nam tincidunt augue non odio eleifend, non fringilla libero mattis. Duis fringilla ex ac odio aliquam, ac lobortis felis sollicitudin. In
        vehicula vestibulum felis, vitae dictum magna consequat vitae. Curabitur quis libero sed lectus fringilla accumsan. Cras bibendum arcu id nibh aliquam, eu iaculis
        dui vulputate. Nulla facilisi. Ut sit amet bibendum lacus. In ipsum elit, ultricies quis lacus in, scelerisque imperdiet sem. Morbi consectetur dictum mi blandit
        consequat. Donec sit amet vulputate neque, non laoreet ex. Etiam blandit mollis cursus. Duis eget orci at nibh facilisis convallis sed quis urna. Proin eu turpis
        in mauris ornare condimentum nec quis libero. Nam nec orci mauris. Cras sed vestibulum nulla. Nullam maximus, sapien a tristique scelerisque, ante lacus iaculis
        sem, vestibulum tempus metus ante quis nisl. In rhoncus sodales ante, eu porttitor sapien vehicula nec. Ut bibendum urna at quam vehicula, et faucibus ante
        eleifend. Quisque semper rhoncus porta. Cras nec mauris quis orci ullamcorper luctus nec sed neque. Pellentesque ut nisi diam. Aliquam erat volutpat. In ac
        pharetra nunc, id convallis purus. Sed finibus nisl id tempus semper. Aenean dapibus consequat ex, sed maximus est vestibulum eget. Phasellus mi odio, auctor in
        arcu tempus, ullamcorper elementum nulla. Fusce massa arcu, pharetra ac nisi et, volutpat porttitor nibh. Phasellus commodo dui sit amet turpis bibendum, eu
        pharetra magna tincidunt. Aenean velit libero, lacinia at gravida non, vestibulum eget tellus. Sed et urna ac elit sagittis pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies accumsan felis iaculis convallis. Mauris ultricies nisi quis finibus pharetra. Proin
        id dui elementum, vestibulum nisl non, pulvinar eros. Praesent ac erat magna. Phasellus vel pretium tellus, eu faucibus tortor. Aliquam erat volutpat. Nam
        sagittis erat tortor, id dictum quam mattis non. Curabitur dictum mauris vitae augue mollis aliquam. Proin elit elit, facilisis in sagittis nec, malesuada eget
        dui. Donec et maximus enim. Phasellus venenatis lacinia neque nec hendrerit. Aenean euismod viverra tristique. Nulla sed diam ex. Aenean purus nisl, viverra nec
        egestas non, hendrerit non libero. Nam malesuada commodo felis, a tempor metus venenatis non. Phasellus congue ut lorem a rutrum. Aenean lacinia, tellus ut
        ullamcorper laoreet, nunc justo pulvinar odio, quis varius nisi leo ac massa. Fusce augue erat, malesuada sit amet placerat sit amet, interdum ut leo. Nunc vitae
        risus congue, laoreet diam non, sodales sapien. Mauris volutpat sollicitudin mi, et fermentum augue. Nam sollicitudin nec urna ac fringilla. Maecenas at enim vel
        neque semper efficitur. Vivamus facilisis ac justo quis hendrerit. Vestibulum egestas vel nisi non gravida. Maecenas odio ipsum, tempor a augue nec, hendrerit
        ullamcorper enim. Pellentesque elementum magna nunc, a scelerisque lacus porttitor vitae. Nulla facilisi. Morbi risus turpis, scelerisque et egestas eget,
        fringilla at velit. Nam tincidunt augue non odio eleifend, non fringilla libero mattis. Duis fringilla ex ac odio aliquam, ac lobortis felis sollicitudin. In
        vehicula vestibulum felis, vitae dictum magna consequat vitae. Curabitur quis libero sed lectus fringilla accumsan. Cras bibendum arcu id nibh aliquam, eu iaculis
        dui vulputate. Nulla facilisi. Ut sit amet bibendum lacus. In ipsum elit, ultricies quis lacus in, scelerisque imperdiet sem. Morbi consectetur dictum mi blandit
        consequat. Donec sit amet vulputate neque, non laoreet ex. Etiam blandit mollis cursus. Duis eget orci at nibh facilisis convallis sed quis urna. Proin eu turpis
        in mauris ornare condimentum nec quis libero. Nam nec orci mauris. Cras sed vestibulum nulla. Nullam maximus, sapien a tristique scelerisque, ante lacus iaculis
        sem, vestibulum tempus metus ante quis nisl. In rhoncus sodales ante, eu porttitor sapien vehicula nec. Ut bibendum urna at quam vehicula, et faucibus ante
        eleifend. Quisque semper rhoncus porta. Cras nec mauris quis orci ullamcorper luctus nec sed neque. Pellentesque ut nisi diam. Aliquam erat volutpat. In ac
        pharetra nunc, id convallis purus. Sed finibus nisl id tempus semper. Aenean dapibus consequat ex, sed maximus est vestibulum eget. Phasellus mi odio, auctor in
        arcu tempus, ullamcorper elementum nulla. Fusce massa arcu, pharetra ac nisi et, volutpat porttitor nibh. Phasellus commodo dui sit amet turpis bibendum, eu
        pharetra magna tincidunt. Aenean velit libero, lacinia at gravida non, vestibulum eget tellus. Sed et urna ac elit sagittis pharetra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies accumsan felis iaculis convallis. Mauris ultricies nisi quis finibus pharetra. Proin
        id dui elementum, vestibulum nisl non, pulvinar eros. Praesent ac erat magna. Phasellus vel pretium tellus, eu faucibus tortor. Aliquam erat volutpat. Nam
        sagittis erat tortor, id dictum quam mattis non. Curabitur dictum mauris vitae augue mollis aliquam. Proin elit elit, facilisis in sagittis nec, malesuada eget
        dui. Donec et maximus enim. Phasellus venenatis lacinia neque nec hendrerit. Aenean euismod viverra tristique. Nulla sed diam ex. Aenean purus nisl, viverra nec
        egestas non, hendrerit non libero. Nam malesuada commodo felis, a tempor metus venenatis non. Phasellus congue ut lorem a rutrum. Aenean lacinia, tellus ut
        ullamcorper laoreet, nunc justo pulvinar odio, quis varius nisi leo ac massa. Fusce augue erat, malesuada sit amet placerat sit amet, interdum ut leo. Nunc vitae
        risus congue, laoreet diam non, sodales sapien. Mauris volutpat sollicitudin mi, et fermentum augue. Nam sollicitudin nec urna ac fringilla. Maecenas at enim vel
        neque semper efficitur. Vivamus facilisis ac justo quis hendrerit. Vestibulum egestas vel nisi non gravida. Maecenas odio ipsum, tempor a augue nec, hendrerit
        ullamcorper enim. Pellentesque elementum magna nunc, a scelerisque lacus porttitor vitae. Nulla facilisi. Morbi risus turpis, scelerisque et egestas eget,
        fringilla at velit. Nam tincidunt augue non odio eleifend, non fringilla libero mattis. Duis fringilla ex ac odio aliquam, ac lobortis felis sollicitudin. In
        vehicula vestibulum felis, vitae dictum magna consequat vitae. Curabitur quis libero sed lectus fringilla accumsan. Cras bibendum arcu id nibh aliquam, eu iaculis
        dui vulputate. Nulla facilisi. Ut sit amet bibendum lacus. In ipsum elit, ultricies quis lacus in, scelerisque imperdiet sem. Morbi consectetur dictum mi blandit
        consequat. Donec sit amet vulputate neque, non laoreet ex. Etiam blandit mollis cursus. Duis eget orci at nibh facilisis convallis sed quis urna. Proin eu turpis
        in mauris ornare condimentum nec quis libero. Nam nec orci mauris. Cras sed vestibulum nulla. Nullam maximus, sapien a tristique scelerisque, ante lacus iaculis
        sem, vestibulum tempus metus ante quis nisl. In rhoncus sodales ante, eu porttitor sapien vehicula nec. Ut bibendum urna at quam vehicula, et faucibus ante
        eleifend. Quisque semper rhoncus porta. Cras nec mauris quis orci ullamcorper luctus nec sed neque. Pellentesque ut nisi diam. Aliquam erat volutpat. In ac
        pharetra nunc, id convallis purus. Sed finibus nisl id tempus semper. Aenean dapibus consequat ex, sed maximus est vestibulum eget. Phasellus mi odio, auctor in
        arcu tempus, ullamcorper elementum nulla. Fusce massa arcu, pharetra ac nisi et, volutpat porttitor nibh. Phasellus commodo dui sit amet turpis bibendum, eu
        pharetra magna tincidunt. Aenean velit libero, lacinia at gravida non, vestibulum eget tellus. Sed et urna ac elit sagittis pharetra.
      </p>
    </div>
  );
}

export default ModalPage;
