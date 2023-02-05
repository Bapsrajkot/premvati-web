import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Card, Modal } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import axios, { Axios } from 'axios';
import Filtermenu from './filter';
import Table from 'react-bootstrap/Table';

const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];


let qualityFilter;

const selectOptions = {
    0: 'premvatiarchana.vercel.app',
    1: 'premvatiuphargruh.vercel.app',
    2: 'premvatifoodcourt.vercel.app',
    3: 'premvatigondal.vercel.app',
    4: 'premvati.vercel.app'
};


const columns = [
    {
        dataField: 'sl.no',
        text: 'ID',
        formatter: (cell, row, rowIndex, formatExtraData) => {
            return rowIndex + 1;
        },
        sort: true,
    },
    {
        dataField: 'formDate',
        text: 'Date',
        sort: true
    },
    {
        dataField: 'age',
        text: 'Age',
        sort: true
    }, {
        dataField: 'gender',
        text: 'Gender',
        sort: true
    }, {
        dataField: 'order',
        text: 'Order Method',
        sort: true
    }, {
        dataField: 'qualityfood',
        text: 'Food Quality',
        sort: true
    }, {
        dataField: 'tasteoffood',
        text: 'Taste of Food',
        sort: true
    },
    {
        dataField: 'servingmethod',
        text: 'Serving Method',
        sort: true
    }, {
        dataField: 'staffbehave',
        text: 'Staff Behaviour',
        sort: true
    }, {
        dataField: 'cleanliness',
        text: 'Cleanliness',
        sort: true
    }, {
        dataField: 'likedproduct',
        text: 'Like Most',
    }, {
        dataField: 'contactnumber',
        text: 'Contact',
    }, {
        dataField: 'suggestion',
        text: 'Suggestion',
    },
    {
        Cell: props => <button className="btn1">Details</button>, text: 'Image',
    }, {

        dataField: 'cityId',
        text: 'StoreName',
        filter: selectFilter({
            options: selectOptions,
            getFilter: (filter) => {
                // qualityFilter was assigned once the component has been mounted.
                qualityFilter = filter;
            }
        })
    }
];

const handleClick = () => {
    qualityFilter(0);
};


function Dashboard() {
    const [dateRange, setDateRange] = useState([null, null]);
    // const [startDate, endDate] = dateRange;
    const [show, setShow] = useState(false);
    const [sgshow, setsgShow] = useState(false);
    const [customDate, setCustomDate] = useState(false);



    const [data, setData] = useState([]);

    useEffect(() => {
        getFormData();
    }, []);



    const getFormData = () => {

        axios("https://premvati-backend-production.up.railway.app/"
            // axios("https://jsonplaceholder.typicode.com/comments"
        )
            .then((res) => {

                setData(res.data.data);


            }
            );
    }


    const [items, setItems] = useState(data);

    const filterData = (cityItem) => {
        const updateItems = data.filter((curElem) => {
            return curElem.cityId === cityItem;
        });
        setItems(updateItems);
    }

    let noofmale = 0;
    let nooffemale = 0;
    let noofother = 0;

    for (var i = 0; i < items.length; i++) {
        if (items[i].gender == "Male") {
            noofmale++;
        }
        else if (items[i].gender == "Female") {
            nooffemale++;
        }
        else {
            noofother++;
        }
    }

    // loadData() = {

    // }

    ChartJS.register(ArcElement, Tooltip, Legend);


    let age1 = 0;
    let age2 = 0;
    let age3 = 0;
    let age4 = 0;
    let age5 = 0;
    let age6 = 0;
    let age7 = 0;

    for (var i = 0; i < items.length; i++) {
        var ageValue = items[i].age;

        switch (ageValue) {
            case "below 18":
                age1 += 1
                break;
            case "18-20":
                age2 += 1
                break;
            case '20-25':
                age3 += 1
                break;
            case '25-30':
                age4 += 1
                break;
            case '30-35':
                age5 += 1
                break;
            case '35-40':
                age6 += 1
                break;
            case 'above 40':
                age7 += 1
                break;

            default:

                break;
        }
    }


    const data1 = {
        labels: ['Under 18', '18-20', '20-25', '25-30', '30-35', '35-40', 'Above 40'],
        datasets: [
            {
                label: '# of Votes',
                data: [age1, age2, age3, age4, age5, age6, age7],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(13, 12, 255)',
                    'rgb(203, 182, 205)',
                ],
            },
        ],
    };


    const data2 = {
        labels: ['Male', 'Female', 'Other'],
        datasets: [
            {
                label: '# of Votes',
                data: [noofmale, nooffemale, noofother],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(54, 95, 217)',
                ],
            },
        ],
    };


    const data3 = {
        labels: ['Khichadi', 'Gujarati Thali', 'Panjabi', 'Chinese', 'South Indian'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 12, 34, 13],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                ],
            },
        ],
    };

    const data4 = {
        labels: ['Excellent', 'Good', 'Fair', 'Poor'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 12, 13],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                ],
            },
        ],
    };

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const optionsnew = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Service Performance',
            },
        },
    };


    const current = new Date();
    const todate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const customdate = () => {
        setCustomDate(true)
    }

    const labels = ['Order Method', 'Food Quality', 'Taste of Food', 'Serving Method', 'Staff Behaviour', 'Cleanliness'];

    let orderexcellentnum = 0;
    let ordergoodnum = 0;
    let orderfairnum = 0;
    let orderpoornum = 0;
    let foodexcellentnum = 0;
    let foodgoodnum = 0;
    let foodfairnum = 0;
    let foodpoornum = 0;
    let tasteexcellentnum = 0;
    let tastegoodnum = 0;
    let tastefairnum = 0;
    let tastepoornum = 0;
    let staffexcellentnum = 0;
    let staffgoodnum = 0;
    let stafffairnum = 0;
    let staffpoornum = 0;
    let servingexcellentnum = 0;
    let servinggoodnum = 0;
    let servingfairnum = 0;
    let servingpoornum = 0;
    let cleanexcellentnum = 0;
    let cleangoodnum = 0;
    let cleanfairnum = 0;
    let cleanpoornum = 0;

    for (var i = 0; i < items.length; i++) {
        var orderValue = items[i].order;
        var foodValue = items[i].qualityfood;
        var tasteValue = items[i].tasteoffood;
        var servingValue = items[i].servingmethod;
        var staffValue = items[i].staffbehave;
        var cleanValue = items[i].cleanliness;

        switch (orderValue) {
            case "Excellent":
                orderexcellentnum += 1
                break;
            case "good":
                ordergoodnum += 1
                break;
            case 'fair':
                orderfairnum += 1
                break;
            case 'poor':
                orderpoornum += 1
                break;

            default:

                break;
        }
        switch (foodValue) {
            case "Excellent":
                foodexcellentnum += 1
                break;
            case "good":
                foodgoodnum += 1
                break;
            case 'fair':
                foodfairnum += 1
                break;
            case 'poor':
                foodpoornum += 1
                break;

            default:

                break;
        }
        switch (tasteValue) {
            case "Excellent":
                tasteexcellentnum += 1
                break;
            case "good":
                tastegoodnum += 1
                break;
            case 'fair':
                tastefairnum += 1
                break;
            case 'poor':
                tastepoornum += 1
                break;

            default:

                break;
        }
        switch (servingValue) {
            case "Excellent":
                servingexcellentnum += 1
                break;
            case "good":
                servinggoodnum += 1
                break;
            case 'fair':
                servingfairnum += 1
                break;
            case 'poor':
                servingpoornum += 1
                break;

            default:

                break;
        }
        switch (staffValue) {
            case "Excellent":
                staffexcellentnum += 1
                break;
            case "good":
                staffgoodnum += 1
                break;
            case 'fair':
                stafffairnum += 1
                break;
            case 'poor':
                staffpoornum += 1
                break;

            default:

                break;
        }
        switch (cleanValue) {
            case "Excellent":
                cleanexcellentnum += 1
                break;
            case "good":
                cleangoodnum += 1
                break;
            case 'fair':
                cleanfairnum += 1
                break;
            case 'poor':
                cleanpoornum += 1
                break;

            default:

                break;
        }
    }



    const datanew = {
        labels,
        datasets: [
            {
                label: 'Excellent',
                data: [orderexcellentnum, foodexcellentnum, tasteexcellentnum, servingexcellentnum, staffexcellentnum, cleanexcellentnum],
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Good',
                data: [ordergoodnum, foodgoodnum, tastegoodnum, servinggoodnum, staffgoodnum, cleangoodnum],
                backgroundColor: 'rgb(54, 162, 235)',
            },
            {
                label: 'Fair',
                data: [orderfairnum, foodfairnum, tastefairnum, servingfairnum, stafffairnum, cleanfairnum],
                backgroundColor: 'rgb(255, 206, 86)',
            },
            {
                label: 'Poor',
                data: [orderpoornum, foodpoornum, tastepoornum, servingpoornum, staffpoornum, cleanpoornum],
                backgroundColor: 'rgb(255, 99, 132)',
            },
        ],
    };

    const reversedItems = [...items].reverse();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const tostartdate = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
    const toenddate = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`;
    // console.log(tostartdate + "-" + toenddate);


    const datefilterData = () => {
        const updateDateItems = data.filter((curElem) => {
            return curElem.formDate === todate;
        });

        setItems(updateDateItems);
    }

    return (
        <div className='panel-inner'>
            <div className='tab-row '>
                <div className="button-group-pills d-flex" data-toggle="buttons">
                    <input type="radio" id="all" value="all" name="options" onClick={() => setItems(data)} />
                    <label for="all">All</label>

                    <input type="radio" id="first" value="first" name="options" onClick={() => filterData('premvati1.vercel.app')} />
                    <label for="first">Kalawad Road</label>

                    <input type="radio" id="second" value="second" name="options" onClick={() => filterData('premvati2.vercel.app')} />
                    <label for="second">Dholakiya</label>

                    <input type="radio" id="third" value="third" name="options" onClick={() => filterData('premvati3.vercel.app')} />
                    <label for="third">Mavdi</label>

                    <input type="radio" id="four" value="four" name="options" onClick={() => filterData('premvati4.vercel.app')} />
                    <label for="four">Pramukh Vatika</label>

                    <input type="radio" id="five" value="five" name="options" onClick={() => filterData('premvati5.vercel.app')} />
                    <label for="five">Tirupati</label>

                    <input type="radio" id="six" value="six" name="options" onClick={() => filterData('premvati6.vercel.app')} />
                    <label for="six">Shraddha Park</label>

                    <input type="radio" id="seven" value="seven" name="options" onClick={() => filterData('premvati7.vercel.app')} />
                    <label for="seven">Sorathiyawadi</label>

                    <input type="radio" id="eight" value="eight" name="options" />
                    <label for="seven">Pramukhraj</label>
                </div>
            </div>
            <div className='sidebar-title'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <button className='tab-link' onClick={() => setItems(data)}>
                            Till Date
                        </button>
                        <button className='tab-link ml-3' onClick={() => datefilterData()}>
                            Today
                        </button>
                        <button className='tab-link ml-3' onClick={customdate}>
                            {customDate ? "Search" : "Custom Date"}
                        </button>
                        {customDate &&

                            <>
                                <div className='position-relative ml-2'>
                                    <img src="./img/calendar.png" alt="" className='position-absolute calender-img' />

                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        placeholderText="From Date"
                                        isClearable={false}
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </div>
                                <span className='ml-2'>
                                    <b>To</b>
                                </span>

                                <div className='position-relative'>
                                    <img src="./img/calendar.png" alt="" className='position-absolute calender-img' />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        isClearable={false}
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </div>
                            </>
                        }
                    </div>
                    <button className='main-button' onClick={() => setShow(true)}>
                        View Chart
                    </button>
                </div>
            </div>

            <div className='mt-4  table-dash'>



                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Order Method</th>
                            <th>Quality Food</th>
                            <th>Taste of Food</th>
                            <th>Serving Method</th>
                            <th>Staff Behaviour</th>
                            <th>Cleanliness</th>
                            <th>Liked Product</th>
                            <th>Contact No.</th>
                            <th>Suggestion</th>
                            <th>Image</th>
                            <th hidden>Store</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reversedItems.map((e) => {
                                const { formDate, age, gender, order, qualityfood, tasteoffood, servingmethod, staffbehave, cleanliness, likedproduct, suggestion, contactnumber, cityId, image } = e;
                                return (
                                    <>
                                        <tr>
                                            <td className='table-data'>{formDate}</td>
                                            <td className='table-data'>{age}</td>
                                            <td className='table-data'>{gender}</td>
                                            <td className='table-data'>{order}</td>
                                            <td className='table-data'>{qualityfood}</td>
                                            <td className='table-data'>{tasteoffood}</td>
                                            <td className='table-data'>{servingmethod}</td>
                                            <td className='table-data'>{staffbehave}</td>
                                            <td className='table-data'>{cleanliness}</td>
                                            <td className='table-data'>{likedproduct}</td>
                                            <td className='table-data'>{contactnumber}</td>
                                            <td className='table-data'>{suggestion}</td>
                                            <td className='table-data'><img height='100px'
                                                src={image} alt="Jay Swaminarayan" /></td>
                                            <td className='table-data' hidden>{cityId}</td>
                                        </tr>
                                        <Modal
                                            show={show}
                                            onHide={() => setShow(false)}
                                            dialogClassName="modal-90w"
                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    <h3>
                                                        <b>
                                                            Data Chart
                                                        </b>
                                                    </h3>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>

                                                <div className='row'>
                                                    <div className='col-md-3'>
                                                        <Card className='mb-3'>
                                                            <Card.Header as="h4">Gender</Card.Header>
                                                            <Card.Body>

                                                                <Card.Text>
                                                                    <Doughnut data={data2} />
                                                                </Card.Text>

                                                            </Card.Body>
                                                        </Card>


                                                    </div>
                                                    <div className='col-md-6'>

                                                        <Card>
                                                            <Card.Header as="h4">Appropriate Option</Card.Header>
                                                            <Card.Body>

                                                                <Card.Text>
                                                                    <Bar options={optionsnew} data={datanew} />
                                                                </Card.Text>

                                                            </Card.Body>
                                                        </Card>

                                                    </div>
                                                    <div className='col-md-3'>

                                                        <Card className='mb-3'>
                                                            <Card.Header as="h4">Age</Card.Header>
                                                            <Card.Body>

                                                                <Card.Text>
                                                                    <Pie data={data1} />
                                                                </Card.Text>

                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </Modal>

                                    </>
                                )
                            }
                            )
                        }
                    </tbody>
                </Table>

            </div>




        </div >
    )
}

export default Dashboard