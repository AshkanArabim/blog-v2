import * as React from "react"

// TODO: should be modded to directly take a blog entry data structure
const TimelineEntry = () => {
    const date = "2024-08-11"
    const title = "why projects matter"
    const peek = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo est, ullamcorper ut velit vel, malesuada tincidunt turpis. Maecenas sit amet sapien urna. Etiam sodales dolor lacus, at laoreet nunc consectetur eget. Etiam convallis accumsan sem, ut tempor urna efficitur sed. Sed dictum tellus eu erat sodales accumsan. Cras eget pretium nisl. Nullam sed ligula molestie, porttitor sapien a, sodales lorem. Nullam mattis ac massa id interdum. Suspendisse vitae venenatis sapien, sit amet semper nunc. Nulla convallis nulla justo, at bibendum risus accumsan vel. Maecenas imperdiet a ante quis lacinia. Proin eleifend consectetur metus, vitae elementum libero consectetur non.\n
        In molestie condimentum egestas. Integer placerat dui sit amet nibh blandit consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at erat luctus, suscipit lectus ac, porttitor metus. Nullam et pharetra eros. Aenean vel porta lorem. Nam risus purus, euismod vitae lectus ac, pharetra volutpat sem. Vivamus volutpat, mauris id efficitur lobortis, nulla ligula lobortis ante, varius tincidunt tortor dui ultricies elit. Nulla porttitor viverra enim, non malesuada eros pellentesque at. Mauris quis metus feugiat, posuere magna eu, finibus ligula. Cras quis ante nec nisl egestas porta. Integer nec consequat orci.\n
        Donec feugiat tellus eget augue sollicitudin laoreet in a nisl. Integer laoreet neque in velit tincidunt, ac mollis erat iaculis. Etiam a nulla at diam semper malesuada et eget dui. Suspendisse ultrices tincidunt justo, at finibus augue efficitur in. Cras sagittis sem elit, semper hendrerit velit lacinia sed. Nullam iaculis eu lectus id fermentum. Aliquam a lobortis felis. Ut ac fringilla mauris, quis dapibus nisl. In hac habitasse platea dictumst. Sed ut tellus maximus nisl sagittis molestie.\n
        Etiam maximus congue risus vitae cursus. Sed nec rutrum lacus. Integer eu lacus a turpis ultricies pharetra venenatis vitae tellus. Proin dictum libero nec nisi vulputate ornare. Sed in consectetur ipsum. Donec aliquam sed erat tempor venenatis. Duis accumsan nisi mattis metus commodo, in sodales est facilisis. Sed ipsum erat, efficitur vel ultrices a, venenatis ac purus. Vestibulum semper imperdiet elementum. Aliquam quis eleifend sem. Phasellus aliquet ipsum tincidunt blandit blandit. Donec vel ultricies felis. Phasellus mattis volutpat elementum. Donec porta, arcu at fringilla cursus, dui velit luctus massa, ut cursus nisl ligula ut dolor. Proin vitae volutpat tortor. Cras gravida tempus convallis.\n
        Duis dignissim urna quis auctor efficitur. In auctor dignissim dui eget finibus. Morbi eget vehicula nulla, et volutpat ligula. Vivamus sodales urna metus, vitae faucibus arcu gravida vitae. Donec risus nisl, tempor in varius quis, varius at mauris. Ut dictum justo ac accumsan auctor. Nam eget lacus eu nibh pretium feugiat. Etiam tortor erat, lacinia sit amet ligula eget, viverra interdum erat. Etiam dictum purus vitae enim suscipit lacinia. In placerat nisi quis felis vestibulum, quis dictum tellus euismod. Duis eu hendrerit orci. Vestibulum scelerisque lacinia ipsum et iaculis. Pellentesque sed velit sed orci feugiat pulvinar. Vivamus eu metus in libero accumsan viverra. Sed ultricies turpis ac augue dapibus faucibus. Donec fringilla justo eu suscipit sodales.\n
    `.substring(0, 500) + '...'

    return (
        <div className="border-t-2 border-black p-4">
            <span className="text-3xl text-red-700">{date}</span>
            <span className="text-3xl"> --- </span>
            <span className="text-3xl">{title}</span>
            <p>{peek}</p>
        </div>
    )
}

export default TimelineEntry
