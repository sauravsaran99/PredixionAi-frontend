import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import '../styles/home.css';
import Loader from './Loader';
import config from '../config/config';
import { toast } from 'react-toastify';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortOption, setSortOption] = useState('none');
    const [filterOption, setFilterOption] = useState('all');

    const fetchTasks = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${config.apiBaseUrl}/api/tasks`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            toast.error('Error creating task');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    const sortedFilteredTasks = tasks
        .filter(task => filterOption === 'all' || task.status === filterOption)
        .sort((a, b) => {
            if (sortOption === 'asc') {
                return a.title.localeCompare(b.title);
            } else if (sortOption === 'desc') {
                return b.title.localeCompare(a.title);
            }
            return 0;
        });

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskForm fetchTasks={fetchTasks} />
            <div className="task-controls">
                <div className="filter">
                    <label htmlFor="filter">Filter by Status:</label>
                    <select id="filter" value={filterOption} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="todo">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div className="sort">
                    <label htmlFor="sort">Sort by Title:</label>
                    <select id="sort" value={sortOption} onChange={handleSortChange}>
                        <option value="none">None</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            {isLoading ? <Loader /> : <TaskList tasks={sortedFilteredTasks} fetchTasks={fetchTasks} />}
        </div>
    );
};

export default Home;
