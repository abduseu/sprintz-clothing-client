const Newsletter = () => {
    return (
        <section>
            <div className="bg-gray my-14 mx-auto w-full rounded-lg">
                <div className="grid-cols-1 p-8 text-center max-[767px]:justify-items-start sm:p-10 md:grid-cols-[1fr_max-content] md:p-16">
                    <div className="mx-auto max-w-[720px]">
                        <h2 className="mb-4 text-3xl font-semibold uppercase md:text-5xl">
                        Get exclusive offers! 
                        </h2>
                        <div className="mx-auto mb-6 max-w-[630px] md:mb-10 lg:mb-12">
                            <p className="text-[#636262] max-[479px]:text-sm">
                            Type your email down below to get monthly promotion
                            </p>
                        </div>
                        <div className="mx-auto mb-4 flex max-w-[560px] flex-col items-center justify-center">
                            <form
                                name="email-form"
                                method="get"
                                className="relative w-full max-w-[80%]"
                            >
                                <input
                                    type="email"
                                    className="block h-9 w-full border border-solid border-black bg-white px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec] rounded"
                                    maxLength={256}
                                    name="email-3"
                                    placeholder="Enter your email"
                                    required=""
                                />
                                <input
                                    type="submit"
                                    defaultValue="Subscribe"
                                    className="absolute right-0 top-[5px] inline-block cursor-pointer items-center bg-black px-6 py-2 text-center font-semibold text-white max-[479px]:relative max-[479px]:w-full sm:right-[5px] rounded"
                                />
                                <div />
                                <div />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;