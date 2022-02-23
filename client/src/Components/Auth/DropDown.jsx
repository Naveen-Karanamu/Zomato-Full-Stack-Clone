import { Menu } from '@headlessui/react'

// Icons
import { FaUserAlt } from "react-icons/fa"

function UserDropDown() {
    return (
        <Menu>
            <Menu.Button><span className="border-2 border-gray-300  rounded-full text-zomatoRed-400"><FaUserAlt className="w-4 h-4 m-2" /></span></Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    <button >Sign in</button>
                </Menu.Item>
                <Menu.Item>
                    <button >Sign up</button>
                </Menu.Item>

            </Menu.Items>
        </Menu>
    )
}

export default UserDropDown;